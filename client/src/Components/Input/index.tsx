import React from "react";

// CSS
import style from './Input.module.css';

// Interface
import IInput from "../../Interfaces/IIpunt";

// Icons
import { IoIosAddCircleOutline } from "react-icons/io";

const Input = ({handleOnChange, name, type, value, className, placeholder}:IInput) => {
    return(
        <>
        <input 
            type={type} 
            name={name} 
            onChange={handleOnChange} 
            value={value? value : ''} 
            className={style[className]}
            placeholder={placeholder}
        />

        <button type="submit"  className={style.iconAdd}>{className == 'create'
            ? (
                <>
                Criar
                <IoIosAddCircleOutline size={30} color="#FFF" />
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

export default Input;