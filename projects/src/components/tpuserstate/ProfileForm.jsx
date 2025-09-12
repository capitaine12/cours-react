import { useState } from "react";
import style from './styles.module.css'
export default function ProfileForm({ajouter}) {
    const [prenom, setPrenom] = useState("")
    const [nom, setNom] = useState("")

    /** verification si les champs sont vide */
    const handleSubmit = (e) => {
        e.preventDefault()
        const prenomTtim = prenom.trim()
        const nomTrim = nom.trim()

        if (!prenomTtim && !nomTrim) return

        const email = `${prenomTtim}.${nomTrim}@contact.com`
        ajouter({id: Date.now(), prenom: prenomTtim, nom: nomTrim, email})
        setPrenom("")
        setNom("")
       
    }
    
    return (
        <>
        <form className={style.form} onSubmit={handleSubmit}>
            <label htmlFor="prenom">
                Prenom :
            <input type="text" id="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
            </label>

            <label htmlFor="nom">
                Nom :
            <input type="text" id="nom" value={nom} onChange={(e) => setNom(e.target.value)} />
            </label>

            <button type="submit" disabled={!prenom.trim() || !nom.trim()} >Envoyer</button>
        </form>
        </>
    )

}