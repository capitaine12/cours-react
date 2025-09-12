import { useEffect, useState } from "react"
import Login from "./Login"
import Notification from "./Notification"
import Admin from "./Admin"

export default function Page() {
    const [isLogin, setIsLogin] = useState(false)
    const [isMsg, setIsMsg] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [showMsg, setShowMsg] = useState(false)

    const toggNotif = () => {
        setIsMsg((prev) => !prev )
    }

     const toggLogin = () => {
        setIsLogin((prev) => !prev)
        setShowMsg(true)
    }

    const userStatuts = () => {
        setIsAdmin(prev => !prev )
    }

    useEffect(() => {
        if(showMsg) {
            const timer = setTimeout(() => {
            setShowMsg(false)
        }, 2000);

        return () => clearTimeout(timer)
}
    }, [showMsg]);


    return (
    <div>
        <div>
            <h2>Login</h2>
            <Login isLogin={isLogin} onToggLogin={toggLogin} showMsg={showMsg} />
        </div>
        <hr />
        <div>
            <h2>Notification Message</h2>
            <Notification hasNotification={isMsg} onclicke={toggNotif} />
        </div>

        <hr />
        <div>
            <h2>statut Admin</h2>
            <Admin isAdmin={isAdmin} userStatut={userStatuts} />
        </div>
    
    </div>
    )
}