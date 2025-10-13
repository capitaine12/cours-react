import '../../styles/Titre.css'

export default function Titre({className='', label}) {
    
    return(
        <h1 className={`custom-Titre ${className}`} >
            {label}
        </h1>
    )
}