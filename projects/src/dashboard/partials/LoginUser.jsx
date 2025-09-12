import Button from "../../components/partial-cards/Button"

const LoginUser = ({isLogin, toggelLogin}) => {

    return (
        <>
        <Button 
        onClick={toggelLogin} 
        className="login" 
        label={isLogin ? 'Deconnexion' : 'Connexion'} />

        </>
    )
}

export default LoginUser