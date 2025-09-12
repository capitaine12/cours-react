import { useState } from "react"
import ToggleCard from "./ToggelCard"
import { utilisateurs } from "./data"

export default function ProfilCard() {

    const [like, setLike] = useState(0)
    const [dislike, setDislike] = useState(0)


    const userCard = utilisateurs.map((ut => (
        <div key={ut.id} className="card">
            <div className="card-header">
                <h3> {ut.prenom} {ut.nom} </h3>
                <span> {ut.profil} </span>
            </div>
            <div className="card-body">
                <ToggleCard description={ut.description} />
            </div>
            <div className="card-footer">
                <button type="button" onClick={() => setLike(like + 1) }>👍🏾 {like} </button>
                <button type="button" onClick={() => setDislike(dislike - 1)}>👎🏾 {dislike} </button>
            </div>
        </div>
    )))

    return (
        <>
            <div className="section">
                {userCard}
            </div>

        </>
    )
}