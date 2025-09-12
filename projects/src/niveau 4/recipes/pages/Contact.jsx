import { useState } from "react";
import FormuInput from "../components/Partials/FormInput";
import Button from "../components/Partials/Button";
import style from "../styles/contact.module.css"
import Message from "../components/Partials/Message";
import { FaFacebook, FaSignOutAlt, FaSmile } from "react-icons/fa";
import { IoLogoWhatsapp, IoMdMail } from "react-icons/io";
import { SiGooglemaps } from "react-icons/si";
import { MdLocalPhone } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { FaTelegram, FaTiktok } from "react-icons/fa6";

export default function Contact() {

    const [send, setSend] = useState(null)
    const [showMessage, setShowMessage] = useState(false)


    const [formData, setFormData] = useState({
        prenom: '',
        nom: '',
        mail: '',
        objet: '',
        message: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!formData.prenom || !formData.nom || !formData.mail || !formData.objet || !formData.message) {

            setSend(false)

        } else {

            setSend(true)
            setFormData({ prenom: '', nom: '', mail: '', objet: '', message: '' })

        }

        setShowMessage(true)

    }


    const champs = [
        {
            id: 1,
            type: 'text',
            label: 'Prenom',
            value: 'prenom',
            placeholder: 'Votre prenom'

        },
        {
            id: 2,
            type: 'text',
            label: 'Nom',
            value: 'nom',
            placeholder: 'Votre nom'

        },
        {
            id: 3,
            type: 'email',
            label: 'Email',
            value: 'mail',
            placeholder: 'Votre Email'

        },
        {
            id: 4,
            type: 'text',
            label: 'Objet',
            value: 'objet',
            placeholder: 'Objet',

        }
    ]


    return (
        <>

            <Message
                show={showMessage}
                className={showMessage ? "success" : "error"}
                type={send ? "success" : "error"}
                icon={send ? <FaSignOutAlt /> : <FaSmile />}
                duration={3000}
                onClose={() => setShowMessage(false)}>
                {send ? 'Message envoyé avec succés' : 'Veillez remplire tous les champs'}
            </Message>


            <h1 className={style.cont}>Contactez-nous</h1>

            <div className={style.gridContainer}>
                <div className={style.gridSocial}>
                    <ul>
                        <li><IoLogoWhatsapp /></li>
                        <li><FaFacebook /></li>
                        <li><RiInstagramFill /></li>
                        <li> <FaTiktok /></li>
                        <li><FaTelegram /></li>
                    </ul>


                </div>
                <form className={style.form} onSubmit={handleSubmit}>
                    {
                        champs.map((champ) => (
                            <div className={style.inputItems} key={champ.id}>
                                <FormuInput
                                    type={champ.type}
                                    value={formData[champ.value]}
                                    placeholder={champ.placeholder}
                                    onChange={(e) => setFormData({ ...formData, [champ.value]: e.target.value })}
                                />

                            </div>

                        ))
                    }
                    <div className={style.inputItems}>
                        <textarea
                            name="message"
                            cols="30"
                            rows="3"
                            placeholder="Votre message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                     </div>
                   <div className={style.contactBtn}>
                   <Button className="btn-update" label='Envoyer' type="submit" />
                   </div>
                </form>
                <div className={style.coordoner}>
                    <ul>
                        <li><MdLocalPhone /> <span>: 00 000 00 00</span> </li>
                        <li><IoMdMail /> <span>: hum.niam@contact.sn</span> </li>
                        <li><SiGooglemaps /> <span>: Tivaouan, Thiés, Sénégal</span> </li>
                    </ul>
                </div>
            </div> {/* <MdOutlineLocalDining /> */}

        </>
    )
}