import React, { ChangeEvent, useState } from "react";

// Interface
import IForm from "../../Interface/IForm";
import Input from "../Input";
import { IoIosAddCircleOutline } from "react-icons/io";
import style from './Form.module.css';
import Button from "../ButtonForm";


const Form = ({task, text, className}: IForm) => {
    const [newTask, setNewTask] = useState<any>({});

    const handleOnChange = (e:ChangeEvent<HTMLInputElement>) => {
        setNewTask(task? task : {
            ...newTask,
            [e.target.name]: e.target.value
        })
    }
    
    const onclick = () => {
        alert("ausgdiasghdiagds")
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