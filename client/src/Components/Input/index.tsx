import React from "react";

// CSS
import style from './Input.module.css';

// Interface
import IInput from "../../Interfaces/IIpunt";

const Input = ({handleOnChange, name, type, value, className}:IInput) => {
    return(
        <input 
            type={type} 
            name={name} 
            onChange={handleOnChange} 
            value={value? value : ''} 
            className={style[className]}
        />
    );
}

export default Input;