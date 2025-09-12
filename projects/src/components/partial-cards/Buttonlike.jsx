import { useState } from "react"
import Button from "./Button"

export default function Buttonlike() {

    const [like, setLike] = useState(0)
    const [dislike, setDislike] = useState(0)

    const handleLike = () => {
        setLike((prev) => prev + 1)
    }
    
    const handleDislike = () => {
        setDislike((prev) => prev - 1)
    }
    
    return (
        <div className="card-bottom-like">
            <Button className="btn-like" onClick={handleLike} label={`J'aime ${like}`} />
            <Button className="btn-unlike" onClick={handleDislike} label={`J'aime pas ${dislike}`} />
        </div>
    )
}