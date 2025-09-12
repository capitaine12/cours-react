import { useState } from 'react'
import styles from '../style/Dashboard.module.css'
import Header from './Header'
import SideBar from './sidebare/SideBar'
import UserApi from './UserApi'
import Message from '../partials/Message'
import { FaSmile, FaSignOutAlt } from 'react-icons/fa'

export default function Dashboard() {
    
    const [showNotification, setShowNotification] = useState(false)
        const [isLogin, setIsLogin] = useState(false)
    
        const toggelLogin = () => {
            setIsLogin((prev) => !prev)
            setShowNotification(true)
        }

       
    return (
        <div className={styles.container}>

            <header>
                <Header isLogin={isLogin} toggelLogin={toggelLogin} />
            </header>
            
               <aside>
                 <SideBar />
               </aside> 
            <main>
                <Message
                show={showNotification}
                className="container-msg"
                type='bon'
                icon={isLogin ? <FaSignOutAlt /> : <FaSmile />}
                duration={3000}
                onClose={() => setShowNotification(false)}
            >
                {isLogin ? 'À la prochaine fois' : 'Bienvenue dans le Dashboard'}
            </Message>
            
              <UserApi /> 
            </main>
        </div>
    )
}