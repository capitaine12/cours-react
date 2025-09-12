import { Link } from "react-router-dom";
import '../styles/header.css'

export default function Header() {
    
    return (
        <header className="header">
            <h2 className="logo">
                Cosmos
            </h2>
            <nav className="nav-link">
            <Link className="item" to='/'>Accueil</Link>
            <Link className="item" to='/profile'>Profil</Link>
            <Link className="item" to='/contact'>Contact</Link>
            <Link className="item" to='/color'>Color</Link>
           {/*  <Link className="item" to='/article'>Article</Link> */}
            
        </nav>
        </header>
    )
}