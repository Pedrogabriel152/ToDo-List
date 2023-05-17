import React, { ChangeEvent, useState } from "react";

// Interface
import IForm from "../../Interfaces/IForm";
import Input from "../Input";

// Icons 
import { GrAddCircle } from 'react-icons/gr';

const Form = ({task, text}: IForm) => {
    const [newTask, setNewTask] = useState<any>({});

    const handleOnChange = (e:ChangeEvent<HTMLInputElement>) => {
    
    }

    return(
        <>
        <Input 
            className="create"
            handleOnChange={handleOnChange}
            name="descricao"
            type="text"
            value=""
            placeholder="Crie uma nova tarefa"        
        />

        </>
    );
}

export default Form;