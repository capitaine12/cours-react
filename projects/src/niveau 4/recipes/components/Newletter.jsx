import style from '../styles/Newletter.module.css'
import InputButton from './Partials/InputButton'
import Titre from './Partials/Titre'
import { IoSend } from "react-icons/io5"



export default function Newletter() {
    
    return (
        <div className={style.container}>
            <div className={style.top}>
                <Titre label={"Abonnez-vous à notre Newsletter !"} className={style.titre} />
            <p>Explorez le monde à travers vos assiettes :</p>
            <p> recettes, astuces et découvertes culinaires directement dans votre boîte mail.</p>
            </div>
            <InputButton 
            type='mail'
            placeholder="Entrer votre Email"
            buttonText="S'inscrire"
            variant="newLetter"
            />
        </div>
    )
}