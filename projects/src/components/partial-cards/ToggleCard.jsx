import {useState } from "react";
import Button from "./Button";

export default function ToggleCard({ description }) {
    const [isshow, setIsshow] = useState(false)

    return (
        <div>
            <div className={`card-descri ${isshow ? 'show' : ''}`}>
                <p>
                    {isshow || description.length <= 30
                        ? description
                        : `${description.slice(0, 30)}...`}
                </p>
            </div>

            <Button onClick={() => setIsshow(!isshow)}
                className={isshow ? "button" : "btn-cover"}
                label={isshow ? "Voir moins" : "Voir plus"}
                
                 />
            

        </div>
    )

}