import React from 'react';
import style from './button.module.css';

export default function Button(props){
    const buttonText = props.catState ? 'I need more facts!' : 'Get me some cat facts!';

    return(
        <div className={style.button_container} onClick={props.onClick}>
            <span className={style.button} >{buttonText}</span>
        </div>
    ) 
}