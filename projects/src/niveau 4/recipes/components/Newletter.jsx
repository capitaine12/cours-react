import style from '../styles/Newletter.module.css';
import InputButton from './Partials/InputButtom';
import Titre from './Partials/Titre';
export default function Newletter() {
    
    return (
        <div className={style.container}>
            <div className={style.top}>
                <Titre label={"Abonnez-vous à notre newsletter !"} className={style.titre} />
            <p>Explorez le monde à travers vos assiettes : recettes, astuces et découvertes culinaires directement dans votre boîte mail.</p>
            </div>
            <InputButton />
        </div>
    )
}