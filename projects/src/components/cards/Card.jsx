import Badge from "../partial-cards/Badge"
import Buttonlike from "../partial-cards/buttonlike"
import ToggleCard from "../partial-cards/ToggleCard"
import "../../styles/Cardprofile.css"


export default function Card({ user }) {

    // const borderRadius = user.sexe === 'f' ? 'card femme' : 'card homme'

    const style = {

        width: user.imgSize,
        height: user.imgSize,
        border: `3px solid ${user.sexe == 'f' ? 'rgb(211, 16, 107)' : 'rgb(52, 52, 252)'} `,
    }



    return (

        <div key={user.id} className='card'>
            <div className='card-imgurl'>
                <img
                    src={user.imgUrl}
                    alt={`Photo de ${user.prenom} ${user.nom}`}
                    style={style}
                />
            </div>
            <div className='card-info'>
                <h2> {user.prenom} {user.nom} </h2>
                <span> {user.profile} </span>

            </div>
            <div className="card-badge">
                {user.type && <Badge type={user.type} label={user.label} />}
            </div>

            <div className='card-descri'>
                <ToggleCard description={user.description} />
            </div>

            <div className="card-bottom">
                <Buttonlike />
            </div>
        </div>

    )
}

