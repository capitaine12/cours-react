import { useState } from "react";
import FormuInput from "../../../components/forms/FormInput";
import Horaires from "../components/Horaire";

export default function Contact() {

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

        }
    ]

    const [formData, setFormData] = useState({
        prenom: '',
        nom: '',
        mail: ''
    });

    return (
        <>
            <h1>Contactez-nous</h1>

            <form>
                {
                    champs.map((champ) => (
                        <div key={champ.id}>
                            <FormuInput
                                type={champ.type}
                                label={champ.label}
                                value={formData[champ.value]}
                                placeholder={champ.placeholder}
                                onChange={(e) => setFormData({ ...formData, [champ.value]: e.target.value })}
                            />

                        </div>

                    ))
                }
                <div>
                    <textarea name="message" cols="30" rows="3" />
                </div>
                <button>Envoyer</button>
            </form>
            <h2>Nos Horaire :</h2>
            <Horaires/>
        </>
    )
}