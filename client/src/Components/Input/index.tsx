// CSS
import style from './Input.module.css';

// Interface
import IInput from "../../Interface/IInput";

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
        </>

        
    );
}

export default Input;