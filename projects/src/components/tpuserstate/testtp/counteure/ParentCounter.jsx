import { useState } from "react";
import CounterDisplay from "./CounterDisplay";
import DecrementButton from "./DecrementButton";
import IncrementButton from "./IncrementButton";

export default function ParentCounter() {
    
    const [count, setCount] = useState(0)
    

    const handleDecrement = () => {
        setCount((prev) => prev - 1)
    }
    const handleInecrement = () => {
        setCount((prev) => prev + 1)
    }

   

    return (
        <div>
            <div className="screen">
                <CounterDisplay count={count} />
            </div>
            <div className="btn">
                <IncrementButton onIncrement={handleInecrement} />
                <DecrementButton onDecrement={handleDecrement} />
            </div>
            
        </div>

    )



}