import {useState } from "react";
import { plantList } from "../data/plantList"
import "../styles/ShoppingList.css";
import Button from "./button";
import PlantItem from "./PlantItem";
import Categories from "./Categories";

function ShoppingList({ cart, updateCart }) {

    const [activeCategory, setActiveCategory] = useState('')
    const categories = plantList.reduce(
        (acc, plant) =>
          acc.includes(plant.category) ? acc : acc.concat(plant.category), []
    )

    function addToCart(name, price) {
        const currentPlantSaved = cart.find((plant) => plant.name === name)
        if (currentPlantSaved) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            updateCart([
                ...cartFilteredCurrentPlant,
                { name, price, amount: currentPlantSaved.amount + 1 }
            ])
        } else {
            updateCart([...cart, { name, price, amount: 1 }])
        }
    }

    return (
        <div className="listplante">

                <Categories
                    categories={categories}
                    setActiveCategory={setActiveCategory}
                    activeCategory={activeCategory}
                />

            <ul className='lmj-plant-list'>
                {
                    plantList.map(({ id, cover, name, water, light, price, category }) => ( //on recuper du nom des plantes sur un li par via le un id

                        !activeCategory || activeCategory === category ? (

                        <div key={id}>
                            <PlantItem
                                id={id}
                                cover={cover}
                                name={name}
                                water={water}
                                light={light}
                                price={price}
                            />
                            
                            <Button label={"Ajouter"} className="ajouter" onClick={() => addToCart(name, price)} />
                        </div>

                        ): null


                    ))
                }
            </ul>


        </div>

    )
}

export default ShoppingList

/*  <li key={plant.id} className='lmj-plant-item'>
                            
                             { plant.name } 
                             {plant.isSpecialOffer && <div className="lmj-sales">Soldes</div>}
                        
                        </li> */