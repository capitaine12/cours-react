import { Link } from 'react-router-dom'
import style from '../styles/Footer.module.css'
import Logo from './Partials/Logo'
import { FaFacebook, FaPhone, FaTelegram, FaTiktok } from 'react-icons/fa6'
import { IoLogoWhatsapp, IoMdMail } from 'react-icons/io'
import { RiInstagramFill } from 'react-icons/ri'
import { FaQuestionCircle } from 'react-icons/fa'
export default function Footer() {

    return (
        <>
            <footer>
                <div className={style.fTop}>
                    <Logo isActive={true} />
                    <div className={style.social}>
                        {/* <FaWhatsapp /> */}
                        <IoLogoWhatsapp />
                        <FaFacebook />
                        {/* <FaInstagram/> */}
                        <RiInstagramFill />
                        <FaTiktok/>
                        <FaTelegram />
                    </div>
                </div>
                <div className={style.fBody}>
                    <div className={style.fLink}>
                        <h2 className={style.title}>Nos liens</h2>

                        <ul className={style.liste}>
                            <li>
                                <Link to="/">Accueil</Link>
                            </li>
                            <li>
                                <Link to="/about">A propo</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={style.about}>
                        <h2 className={style.title}>A propos</h2>
                        <ul className={style.liste}>
                            <li>Nouveau recette</li>
                            <li>Fast recette</li>
                            <li>Dîner</li>
                            <li>Petit déjeuner</li>
                            <li>Déjeuner</li>
                            <li>Dessert</li>
                            <li>Snack</li>
                            <li>Tish facette</li>
                            <li>Appétitateu</li>
                            <li>Deux déjeuner</li>
                            <li>Décapotage</li>
                        </ul>

                    </div>
                    <div className={style.service}>
                        <h2 className={style.title}>Nos Services clientéle</h2>
                        <ul className={style.liste}>
                            <span className={style.sIcon}><FaQuestionCircle /> <li>: FAQ cuisine</li></span>
                            <span className={style.sIcon}><FaQuestionCircle /> <li>: FAQ recette</li></span>
                            <span className={style.sIcon}><FaPhone /> <li>: +33 800 20 20</li></span>
                            <span className={style.sIcon}><IoMdMail /> <li>: hum.niam@contact.sn</li></span>
                        </ul>
                    </div>
                </div>
                <div className={ style.fBottom}>
                    <span>© Hum Niam tous doit reserver</span>
                    <span>Politique de confidentialité</span>
                    <span>Conditions générales</span>
                </div>
            </footer>
        </>
    )
}