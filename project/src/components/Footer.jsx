import {useState } from "react"
import '../styles/footer.css'

export default function Footer() {
    const [inputValue, setInputValue] = useState('')

    function  handleInput(e) {
        setInputValue(e.target.value)
    }

    function  handleBlur() {
    if (!inputValue.includes('@')) {
        alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
        
    }
}

    return (
        <footer className='lmj-footer'>
            <div className="lmj-footer-elem'">
                 <span>Maison Jungle toutes doit reserver</span>
            </div>
            
           <div className="lmj-footer-elem">
            
            <form>
                <label>Laissez-nous votre mail : </label>
                <input 

                className="lmj-footer-input"
                placeholder="Entre votre Email"
                value={inputValue} 
                onChange={handleInput}
                onBlur={handleBlur}
                />
            </form>
           </div>
            
        </footer>
    )
}