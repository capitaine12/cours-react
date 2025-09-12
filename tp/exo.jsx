import { useEffect, useState } from "react";

export default function Exo() {
    const [message, setMessagee] = useState(true)
    const [count, setCount] = useState(0)
    const [datas, setDatas] = useState(null)
    const [loading, setLoading] = useState(true)

    /* 
    ecrit un useEffect qui permet un de faire un message de bienvenue 
    pendant 3 seconde et de disparaitre en utilisant useState 
    de type boolean et un setTimeout
     */

    useEffect(() => {
        const timer = setTimeout(() => {
            setMessagee(false)
        }, 3000);
        return () => {
            clearTimeout(timer)
        }
    }, []);


    /* 
    ecrit un useEffect qui permet de gere un counteur 
    automatique a partire de 0
     */

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prev) => prev + 1)
        }, 1000);
         return () => clearInterval(timer)
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDatas({nom: 'cheikh', ville: 'Thies' })
            setLoading(false)
            
        }, 2000);
        return () => clearTimeout(timer)
    }, []);

    return (
        <div>
            <div> {message && <h1> bienvenue dans mon site </h1>} </div>
            <di> temps ecoule en secound <strong>{count}</strong> secound </di>
            {
                loading ? <p>Chargement ....</p> : (
                    <div>
                        <p>nom : {datas.nom} </p>
                        <p>Ville: {datas.ville} </p>
                    </div>
                )
            }
        </div>
    )

}