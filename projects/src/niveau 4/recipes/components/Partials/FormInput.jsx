import "../../styles/FormInput.css"
export default function FormuInput ({type="", value, placeholder, onChange, label= null, className="f-input"}) {

    return (
        <>
        
        
            {label && <label> {`${label} :`}</label>}
            <input
             type= {type}
             value={value}
             onChange={onChange}
             placeholder= {placeholder}
             className={`custom-input ${className}`}
              />

        
        </>
    )
}