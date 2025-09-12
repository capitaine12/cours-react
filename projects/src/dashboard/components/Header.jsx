import LoginUser from "../partials/LoginUser";
import styles from '../style/Header.module.css'

export default function Header({isLogin , toggelLogin}) {
    


    return (
        <div className={styles.header}>
            <div className={styles.logo}>Logo</div>
            <h2 className={styles.titre}>Dashboard</h2>
            <div className={styles.boxRight}>
                <div className={styles.avatar}>
                    <img src={`https://i.pravatar.cc/150?img`} alt='Avatar'/>
                </div>
                <span> {isLogin ? "🔴 Hors ligne" : "🟢 En ligne" } </span>
                    <LoginUser  isLogin={isLogin}  toggelLogin={toggelLogin} />
            </div>
        </div>
    )
}