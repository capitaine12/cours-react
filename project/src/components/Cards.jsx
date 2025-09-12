import { useEffect, useState } from 'react'
import '../styles/cards.css'
import Button from './button'


function Cards({ cart, updateCart }) {

    const [isOpen, setIsOpen] = useState(true)
    const total = cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price,
        0
    )

    useEffect(() => {
        document.title = `MJ | ${total} € `
        
    }, [total])

    return isOpen ? (
        <div className='lmj-cart'>
            <Button label="Fermer" onClick={() => setIsOpen(false)} />

            {cart.length > 0 ? (

                <div>
                    <h2>Panier</h2>
                    <div className='cards-pannier'>
                        <ul>
                            {
                                cart.map(({ name, price, amount }, index) => (
                                    <div key={`${name}-${index}`}>
                                        {name} {price} € x {amount}
                                    </div>
                                )
                                )
                            }
                        </ul>
                    </div>
                    <h3>Total : {total} €</h3>
                    <Button label={"Réinitialiser"} onClick={() => updateCart([])} />
                </div>
            ) :
                <div> Votre panier est vide </div>
            }



        </div>
    ) : (

        <div className='lmj-cart-closed'>
            <Button label="Ouvrir" className="ouvrir-button" onClick={() => setIsOpen(true)} />
        </div>
    )

}

export default Cards
