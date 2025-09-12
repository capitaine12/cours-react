import { Link, useLoaderData } from "react-router-dom"
import style from '../styles/Retail.module.css'
import { useAverageColor } from "../components/Partials/useAverageColor"
import Loader from "../components/Partials/Loader"
import { MdCloseFullscreen } from "react-icons/md"

export default function Retail() {
    const recipe = useLoaderData()
    const { colors, loading } = useAverageColor(recipe.image)

    if (loading) return <Loader />
    if (!colors) return null

    return (
        <>
            <div
                className={`${style.cardRetail} ${style.fadeIn}`}
            style={{
                "--accent": colors.accent
            }}
            >
                <div className={style.close}>
                    <Link to="/"><MdCloseFullscreen /></Link>
                </div>
                <div className={style.top}>
                    <h2> {recipe.name} </h2>
                    <div className={style.topItems}>
                        <p>
                            <strong>Type de plat :</strong>
                            {recipe.mealType.map((meal, index) => (
                                <span key={index}>{` ${meal},`}</span>
                            ))}
                        </p>

                        <p>
                            <strong>Mot-clé :</strong>
                            {recipe.tags.map((tag, index) => (
                                <span key={index}>{` ${tag},`}</span>
                            ))}
                        </p>
                        <p>
                            <strong>Difficulté : </strong>
                            {recipe.difficulty}
                        </p>
                    </div>
                </div>

                <div className={style.RBody}>
                    <div className={style.ingredient}>
                        <h3>Ingrédients :</h3>
                        {recipe.ingredients.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </div>

                    {/* Divider avec couleur dynamique */}
                    <div
                        className={style.diviseur}
                        style={{ background: useAverageColor }}
                    ></div>

                    <div className={style.prep}>
                        <h3>Préparation :</h3>
                        <ol>
                            {recipe.instructions.map((step, index) => (
                                <li
                                    key={index}
                                    style={{
                                        "--stepColor": useAverageColor
                                    }}
                                >
                                    {step}
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>

                <div className={style.cBottom}>
                    <div
                        className={style.RImage}
                        style={{
                            background: `url(${recipe.image}) center center / cover no-repeat `
                        }}
                    ></div>

                    <div
                        className={style.rightBox}
                        style={{ background: useAverageColor }}
                    >
                        <div className={style.facts}>
                            <h3>Cuisine</h3>
                            <span>{recipe.cuisine}</span>
                        </div>
                        <div className={style.facts}>
                            <h3>Portion</h3>
                            <span>{recipe.servings}</span>
                        </div>
                        <div className={style.facts}>
                            <h3>Préparation</h3>
                            <span>{recipe.cookTimeMinutes} minutes</span>
                        </div>
                        <div className={style.facts}>
                            <h3>Cuisson</h3>
                            <span>{recipe.prepTimeMinutes} minutes</span>
                        </div>
                        <div className={style.facts}>
                            <h3>Calories</h3>
                            <span>{recipe.caloriesPerServing} cal</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
