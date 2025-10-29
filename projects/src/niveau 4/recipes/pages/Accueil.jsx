import { useState } from "react";
import Card from "../components/Card";
import Banner from "../components/Partials/Banner";
import Categories from "../components/Partials/Categories";
import style from '../styles/Home.module.css'
import { useLoaderData } from "react-router-dom";

export default function Accueil() {


    const { recipes } = useLoaderData();

    const [selectedDifficulty, setSelectedDifficulty] = useState(null);
    const filteredRecipes = selectedDifficulty
      ? recipes.filter(r => r.difficulty === selectedDifficulty)
      : recipes


    return (
        <>
        <Banner />
        <Categories selected={selectedDifficulty} onSelect={setSelectedDifficulty} />
    
        <div className={style.cards}>
            <Card recipes={filteredRecipes} />
        </div>
        
        </>
    )
}