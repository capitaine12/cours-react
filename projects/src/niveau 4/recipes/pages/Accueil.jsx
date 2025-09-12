import { useState } from "react";
import Card from "../components/Card";
import Banner from "../components/Partials/Banner";
import Categories from "../components/Partials/Categories";
import style from '../styles/Home.module.css'

export default function Accueil() {

   // const [filtrer, setFiltrer] = useState(null)
    
    return (
        <>
        <Banner />
        <Categories /* onSelect={setFiltrer} selected={filtrer} *//>
        <div className={style.cards}>
            <Card /* filtrer={filtrer} */ />
        </div>
        </>
    )
}