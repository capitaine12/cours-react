import CareScale from "./CareScale";
import "../styles/Plantitem.css"

function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

function PlantItem({name, cover, id, water, light, price}) {

    return (
        <li key={id} className ="mj-plant-item" onClick={() => handleClick(name)}>

            <span className='lmj-plant-item-price'> {price} €</span>
            <img className ='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
            
           <p>{name}</p> 

            <div>
                <CareScale careType= 'water' scaleValue={water} />
                <CareScale careType= 'light' scaleValue={light} />
            </div>

        </li>
    )
    
}

export default PlantItem