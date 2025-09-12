export default function Login({isLogin, onToggLogin, showMsg}) {

   
    
    return (
        <div>
           
            <button onClick={onToggLogin}>
                {isLogin ? "Se Deconnecter" : "Se connecter" }
                </button>

                {showMsg && (isLogin ? <p>Bienvenue !</p> : <p>Merci de vous reconnecter</p> )}

        </div>
    )

   
}