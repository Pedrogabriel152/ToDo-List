import React, { ChangeEvent, useState } from "react";

// Interface
import { IoIosAddCircleOutline } from "react-icons/io";
import style from '../Form/Form.module.css';
import { IButton } from "../../Interface/IButton";


const Button = ({className, onclick}: IButton) => {
    return(
        <>
        <button 
            type="submit"  
            className={className === 'create'? style.iconAdd : style.edit}
            onClick={onclick}
        >
            {className === 'create'
            ? (
                <>
                Criar<IoIosAddCircleOutline size={30} color="#FFF" />
                </>
            ) : (
                <>
                ''
                </>
            )
        }</button>

        </>
    );
}

export default Button;