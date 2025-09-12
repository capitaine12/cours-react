import { Link } from 'react-router-dom'
import style from '../styles/Header.module.css'
import { FaBell, FaMoon, FaSun } from 'react-icons/fa6'
import Logo from './Partials/Logo'

export default function Header({ darkMode }) {

    return (
        <>
            <header className={style.header} >
               <Logo/>

                <nav className={style.navLink}>
                    <Link to='/' >Accueil</Link>
                    <Link to='/about' >A propos</Link>
                    <Link to='/contact' >Contact</Link>
                </nav>

                <div className={style.hIcons}>
                    < FaBell />
                    {darkMode ? <FaSun /> : <FaMoon />}
                </div>

            </header>
        </>
    )
}