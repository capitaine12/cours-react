import { useState } from "react";

export default function ToggleCard({description}) {
    const [visible, setVisible] = useState(false)

    return (
        <>
            {visible && <p> {description} </p> }
            <button onClick={() => setVisible(!visible)}>
                {visible ? 'voir moins' : 'voir plus'}
            </button>
        </>
    )
}