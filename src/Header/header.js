import React from 'react';
import style from './header.module.css';
import catFactLogo from '../Media/Cat.png'

export default function Header(){
    return(
        <div className={style.header_container}>
            <img src={catFactLogo} className={style.cat_fact_logo} alt="cat fact logo" />
        </div>
    )
}