import { ChangeEvent, useState } from "react";

// Interface
import IForm from "../../Interface/IForm";
import Input from "../Input";
import Button from "../ButtonForm";
import { useTaskContext } from "../../Context/TaskContext";
import { useReactiveVar } from "@apollo/client";
import { createTasksVar, updateTasksVar } from "../../GraphQL/Task/state";
import { toast } from "react-toastify";


const Form = ({task, text, className, setModal}: IForm) => {
    const {createTaskBanco, editTask} = useTaskContext();
    const response = useReactiveVar(createTasksVar);
    const [descricao, setDescricao] = useState<string>('');
    const editResponse = useReactiveVar(updateTasksVar);

    const handleOnChange = (e:ChangeEvent<HTMLInputElement>) => {
        setDescricao(e.target.value)
        console.log(task)
    }
    
    const onclick = () => {
        if(!descricao){
            alert("O campo de descrição é obrigatório");
        }

        if(className !== 'create'){
            editTask({
                descricao: descricao,
                status: task.status,
                id: task.id
            });

            if(editResponse?.code != 200){
                toast.error(editResponse?.message);
                return;
            }
            toast.success(editResponse?.message);
            if(setModal){
                setModal(false);
            }
            return;
        }

        createTaskBanco(descricao);
        if(response?.code != 200){
            toast.error(response?.message);
        }

        toast.success(response?.message);
        setDescricao('');

    }

    return(
        <>
        <Input 
            className={className}
            handleOnChange={handleOnChange}
            name="descricao"
            type="text"
            value={descricao? descricao : task?.descricao }
            placeholder={className === 'create'? 'Criar uma novas tarefa' : 'Editar a tarefa'}      
        />

        <Button className={className} onclick={onclick} text={text} setModal={setModal}/>

        </>
    );
}

export default Form;