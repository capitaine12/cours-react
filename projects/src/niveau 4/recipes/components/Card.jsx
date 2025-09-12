import { CiHeart, CiStar } from 'react-icons/ci'
import style from '../styles/Card.module.css'
import { Link, useLoaderData } from 'react-router-dom'
import { difficultColor } from '../services/ColorDifficult'


export default function Card(/* {filtrer} */) {

   
    const data = useLoaderData()
    let recipes = data.recipes

    /* if (filtrer) {
        
        recipes = recipes.filter(
            
            (r) => r.difficulty === filtrer || (!r.difficulty && filtrer === 'Uncknown')
        )
    } */

    return (
        <>

            {recipes && recipes.map((recipe) => (

                    <Link key={recipe.id} to={`/retail/${recipe.id}`} className={style.cLink}>

                        <div className={style.card} style={
                            { 
                                background: `url(${recipe.image}) center center / 203px 300px no-repeat `
                            }
                            } >

                            <div className={style.ctop}>
                                <span className={style.diffTag} 
                                style={{
                                    backgroundColor:difficultColor[recipe.difficulty].color
                                }} ></span>
                                <CiHeart />
                            </div>
                            <div className={style.cbody}>
                                <h2> {recipe.name} </h2>
                            </div>
                            <div className={style.cbottom}>
                                <span><CiStar /> <p>{recipe.rating} </p></span>
                                <span><p>{recipe.reviewCount} avis </p></span>
                            </div>
                        </div >
                    </Link>
                ))

            }

        </>
    )
}