import React from "react";

// Icons
import { BsRocket } from 'react-icons/bs';

// CSS
import style from './Logo.module.css';

const Logo = () => {
    return (
        <div className={style.navbar}>
            <h1><BsRocket size={40} color='#4EA8DE'/>to<span>do</span></h1>
        </div>
    );
}

export default Logo;