export default function Admin({isAdmin, userStatut}) {
    
    return (
        <div>
            <button onClick={userStatut}>Devenir Admin</button>
            
            <button onClick={userStatut}>Devenir Membre</button>

            {isAdmin ? (
               <div>
                 <h2>Dashboard</h2>
                <p>Bienvenue dans le dasboard</p>
               </div>

            ) : (
                <div>
                    <p>Vous n y est pas autoriser</p>
                </div>
            )

        }
        </div>
    )
}