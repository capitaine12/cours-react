import style from "../../categorie.module.css"
import { difficultColor } from "../../services/ColorDifficult";
import InputButton from "./InputButtom";

export default function Categories(/* {onSelect, selected} */) {

    return (
        <>
            <div className={style.container}>
                <InputButton />
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