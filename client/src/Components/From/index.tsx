import React, { ChangeEvent, useState } from "react";

// Interface
import IForm from "../../Interfaces/IForm";
import Input from "../Input";


const Form = ({task, text}: IForm) => {
    const [newTask, setNewTask] = useState<any>({});

    const handleOnChange = (e:ChangeEvent<HTMLInputElement>) => {
    
    }

    return(
        <Input 
            className=""
            handleOnChange={handleOnChange}
            name=""
            type=""
            value=""
        />
    );
}

export default Form;