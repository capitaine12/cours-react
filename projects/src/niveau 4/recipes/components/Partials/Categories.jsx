//import { useState } from "react";
import { useState } from "react";
import style from "../../categorie.module.css"
import { difficultColor } from "../../services/ColorDifficult";
import InputButton from "./InputButtom";
import { FiSearch } from "react-icons/fi";


export default function Categories(/* {onSelect, selected} */) {

    const [searchTerm,setSearchTerm] = useState("");

    const handleSearch = (e) => {

        e.preventDefault()
        setSearchTerm(e.target.value)
        

    }

        const handleClick = () => {
            alert("votre recherche sur la recette ", searchTerm)
        }

    return (
        <>
            <div className={style.container}>
                <InputButton 
                type="search"
                value="searchTerm"
                onChange={handleSearch}
                placeholder={"Rechercher une recette..."}
                label={<FiSearch />}
                handleClick={handleClick}
                /* handleSearch={(e)=>handlerSearch} */
                />

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