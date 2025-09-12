import { useState } from "react";
import FormuInput from "./FormInput";
import Button from "../partial-cards/Button";
import '../../styles/Formuser.css'

export default function FormUser({ ajouter, modifierUser, userCurrent}) {

  //const estModifier = userCurrent != null
  const [prenom, setPrenom] = useState("")
  const [nom, setNom] = useState("")
  const [mail, setMail] = useState("")

  const utilisateur = { prenom, nom, mail }
 const handleModifierClick = () => {
    if (userCurrent) {
      setPrenom(userCurrent.prenom);
      setNom(userCurrent.nom);
      setMail(userCurrent.mail);
    }
  };

  if (userCurrent && prenom === "" && nom === "" && mail === "") {
    handleModifierClick()
  }

  const handleSubmit = (e) => {

    e.preventDefault()
    if (!prenom && !nom && !mail) return

    //todo modification de l'utilisateur selectionner

    if (userCurrent) {

      modifierUser(utilisateur)
     
    } else {
      ajouter(utilisateur)
    }

    setPrenom("")
    setNom("")
    setMail("")

  }



  return (
    <>
      <form onSubmit={handleSubmit} className="form-card">
        <FormuInput type="text" value={prenom} placeholder="Entre votre prenom" label="Prenom" onChange={(e) => setPrenom(e.target.value)} />
        <FormuInput type="text" value={nom} placeholder="Entre votre nom" label="Nom" onChange={(e) => setNom(e.target.value)} />
        <FormuInput type="email" value={mail} placeholder="Entre votre mail" label="Email" onChange={(e) => setMail(e.target.value)} />

        <Button type="submit" disabled={!prenom || !nom || !mail} label={userCurrent ? "Enregistrer" : "Ajouter"} className="btn-submit" />
      </form>

    </>
  )
}
