export default function Profile() {
    
    return (
        <>
        <div className="couverture">
            <h1>Bienvenue sur votre Profile</h1>
        </div>
        <div className="contente">
            <img src={`https://i.pravatar.cc/150?img`} alt='Avatar'/>
            <div className="p-infos">
                <ul>
                    <li><span>Prenom : </span> Nafi</li>
                    <li><span>Nom : </span>Kamara</li>
                    <li><span>Email : </span>nafi.kamara@contact.com</li>
                </ul>
            </div>
        </div>
        </>
    )
}