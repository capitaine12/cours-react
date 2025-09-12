import style from "./styles.module.css"
export default function ProfilList({utilisateurs}) {
    
    return (
        <ul>
        {
        utilisateurs.map((u,i) => (
            <li key={u.id} className={style.user}>
                <p>
                    <strong> {i + 1}. Bonjour {u.prenom} {u.nom} </strong>
                </p> 
                <p>Voici votre Email : <i> {u.email} </i> </p>
            </li>
        )
    )
        }
        </ul>
    )
}