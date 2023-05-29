import React, { ChangeEvent, useState } from "react";

// Interface
import IForm from "../../Interface/IForm";
import Input from "../Input";
import Button from "../ButtonForm";
import { useTaskContext } from "../../Context/TaskContext";
import { useReactiveVar } from "@apollo/client";
import { createTasksVar } from "../../GraphQL/Task/state";
import { toast } from "react-toastify";


const Form = ({task, text, className}: IForm) => {
    const [newTask, setNewTask] = useState<any>({});
    const {createTaskBanco} = useTaskContext();
    const response = useReactiveVar(createTasksVar)

    const handleOnChange = (e:ChangeEvent<HTMLInputElement>) => {
        setNewTask(task? task : {
            ...newTask,
            [e.target.name]: e.target.value
        });
    }
    
    const onclick = () => {
        if(className !== 'create'){
            return;
        }

        if(!newTask.descricao){
            alert("O campo de descrição é obrigatório");
        }

        createTaskBanco(newTask.descricao);
        if(response?.code != 200){
            toast.error(response?.message);
        }

        toast.success(response?.message);
        setNewTask({});

    }

    return(
        <>
        <Input 
            className={className}
            handleOnChange={handleOnChange}
            name="descricao"
            type="text"
            value={newTask? newTask.descricao : task? task.descricao : ''}
            placeholder={className === 'create'? 'Criar uma novas tarefa' : 'Editar a tarefa'}      
        />

        <Button className={className} onclick={onclick}/>

        </>
    );
}

export default Form;