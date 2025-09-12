import { useEffect, useState } from "react"
import Card from "./Card"
import '../style/cards.css'
import Loader from "../partials/Loader"
import Message from "../partials/Message"
export default function UserApi() {
    const [users, setUsers] = useState([])
    const [loader, setLoder] = useState(true)
    const [erreur, setErreur] = useState(false)
    const [showNotification, setShowNotification] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            fetch("https://dummyjson.com/users?limit=10")
            .then((reponse) => {
               
                if (!reponse.ok) {
                    throw new Error("Erreur de HTTP ! ")   
                }
               
                return reponse.json()
            })
            .then((data) => {
                setUsers(data.users)
                setLoder(false)
                setShowNotification(true)
            })
            .catch((error) => {
                console.error("Erreur du fetch ... ", error)
                setErreur(true)
                setLoder(false)
                setShowNotification(true)
                
            })
        }, 1000);

        return () => clearTimeout(timer)

    }, 
    
    []); 

   if(loader) return <Loader/>
    
    {/* <strong style={{position: "absolute", top: "50%", left: '50%', transform: 'translate(-50%, -50%)'}} className="info" >Une erreur est survenue lors du chargement.</strong>
     */}
    return erreur ? (
        <Message
        show={showNotification} 
        type='error' 
        icon
        style={{position: "absolute", top: "50%", left: '50%', transform: 'translate(-50%, -50%)'}} 
        duration={3000}
        onClose={() => setShowNotification(false)}
     
    > {erreur && "Une erreur est survenue lors du chargement."} </Message>
    ) :
    
    (
        <div className="cards">
        {
           Array.isArray(users) && users.map((user) => (
             <Card key={user.id} user={user} />
           ))
        }
        </div>
    ) 
    
}