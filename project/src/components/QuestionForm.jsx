import { useState } from "react";

function checkValue(value) {
    if (!value.includes('f')) {
        setInputValue(value)
    }
}

function QuestionForm() {

    //const [inputValue,setInputValue] = useState("Poser votre question ici")

    return (
        <div>
            <textarea 
            value={inputValue}
            onChange={(e) => checkValue(e.target.value)
               
            }
            />
            <button onClick={() => alert(inputValue)}>click moi</button>
        </div>
    )
    
}



export default QuestionForm