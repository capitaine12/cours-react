import  { useState } from 'react';
import ProfilCard from "./ProfileCard";
import ProfileForm from "./ProfileForm";
import ProfilList from "./ProfileList";
import style from './styles.module.css'

export default function Home() {

    const [utilisateurs, setUtilisateurs] = useState([])

    const ajouter = (utilisateur) => {
        setUtilisateurs((prev) => [...prev,utilisateur])
    }
    
    return (
        <div className={style.container}>
            <section className="sec-cards">
                <ProfilCard />
            </section>
            <section className="sec-form">
                <ProfileForm ajouter={ajouter} />
            </section>
            <section className="sec-list">
                <ProfilList utilisateurs={utilisateurs} />
            </section>
        </div>
    )
}