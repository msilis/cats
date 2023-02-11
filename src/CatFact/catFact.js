
import style from './catFact.module.css';

export default function CatFact(props){
    
    return(
        <div className={style.cat_fact_container}>
            <div className={style.cat_fact_text}>
                <p>{props.catFact}</p>
            </div>
        </div>
    )
}