export default function Notification({hasNotification, onclicke}) {
    
    return (
        <div>
            <button onClick={onclicke} >Afficher un nouveau message</button>
            {hasNotification && <p> vous avez un nouveau message </p>}
        </div>
    )
}

/* 
const [ismsg, setIsMsg] = useState(false)

const toggleNotification = () => {
    setIsMsg(prev => !prev)
    }

<Notification hasNotification={ismsg} onclike={togglenotification} />
 */