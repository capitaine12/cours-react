import FormuInput from "./FormInput";
import style from "../../categorie.module.css"
import { difficultColor } from "../../services/ColorDifficult";
import Button from "./Button";

export default function Categories(/* {onSelect, selected} */) {




    return (
        <>
            <div className={style.container}>
                <form >
                    <FormuInput />
                    <Button />
                </form>
                <div className={style.boxDifficult}>
                    <p>Difficulter</p> 
                    <div className={style.legende} >
                    {
                        Object.entries(difficultColor).map(([key, value]) => (
                        
                                <span 
                                className={style.diffTag} 
                                key={key}
                                    style={{
                                        backgroundColor: value.color
                                    }}
                                    title={value.label}
                                    //onClick={onSelect(selected === key ? null : key)}
                                ></span>
                            
                        ))}</div>
                </div>
            </div >
        </>
    )
}