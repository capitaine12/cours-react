import { useState } from "react";

export default function FormUser({ajouter}) {
    
    const [prenom, setPrenom] = useState("")
    const [nom, setNom] = useState("")


    const handleSubmit = (e) => {

        e.preventDefault()
        if (!prenom || !nom) return
        ajouter({prenom, nom})
        setPrenom("")
        setNom("")
        
    }

   return (
     <form onSubmit={handleSubmit}>
        <input type="text" name="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value) } placeholder="Votre prenom" />
        <input type="text" name="nom" value={nom} onChange={(e) => setNom(e.target.value) } placeholder="Votre nom" />

        <button type="submit">Ajouter</button>
    </form>
   )

}