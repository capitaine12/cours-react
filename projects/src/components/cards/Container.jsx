import { users } from "../../data/ListePersonne";
import FormUser from "../forms/FormUser";
import UserList from "../forms/UserList";
import '../../styles/Contente.css'

import Card from "./Card";
import {useState } from "react";
import Pokemon from "../../apis/Pokemon";
//import Apiuseeffect from "../../apis/Apiuseffect";

export default function Container() {

    const [utilisateurs, setUtilisateurs] = useState([])
    const [userToEdit, setUserToEdit] = useState(null);

    const adduser = (utilisateur) => {
        setUtilisateurs([...utilisateurs, utilisateur])
    }

    const supprimer = (mail) => {
        setUtilisateurs(utilisateurs.filter(u => u.mail !== mail))
    }
    
    const modifierUser = (utilisateur) => {
        setUtilisateurs((prev) =>
            prev.map((u) =>
                u.mail === userToEdit.mail ? utilisateur : u
             )
        )
        setUserToEdit(null)
    }

    return (
        <>
            <div className="contente">
                {
                    users.map(user => (
                        <Card key={user.id} user={user} />
                    ))
                }
            </div>

            <div className="form-table">

                <div className="formulaire">
                    <FormUser ajouter={adduser} modifierUser={modifierUser} userCurrent={userToEdit} />
                </div>

                <div className="out-table">
                    <UserList utilisateurs={utilisateurs} supprimer={supprimer} updateUser={setUserToEdit} />
                </div>

            </div>

            <div className="contente">
                <Pokemon />
            </div>

        </>

    )
}