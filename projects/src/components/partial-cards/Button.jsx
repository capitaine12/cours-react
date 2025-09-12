import '../../styles/Button.css'
export default function Button({type='button',className='', onClick, label, disabled = false }) {
    
    return (
        <button 
        type = {type}
        className = {`custom-button ${className}`}
        onClick = {onClick}
        disabled = {disabled}
        > {label} </button>
    )
}