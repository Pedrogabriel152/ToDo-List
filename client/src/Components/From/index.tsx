import React, { ChangeEvent, useState } from "react";

// Interface
import IForm from "../../Interfaces/IForm";
import Input from "../Input";


const Form = ({task, text, classname}: IForm) => {
    const [newTask, setNewTask] = useState<any>({});

    const handleOnChange = (e:ChangeEvent<HTMLInputElement>) => {
    
    }

    return(
        <>
        <Input 
            className={classname}
            handleOnChange={handleOnChange}
            name="descricao"
            type="text"
            value={task? task : newTask? newTask.descricao : ''}
            placeholder={classname === 'create'? 'Criar uma novas tarefa' : 'Editar a tarefa'}       
        />

        </>
    );
}

export default Form;