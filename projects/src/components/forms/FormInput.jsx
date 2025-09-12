import "../../styles/FormInput.css"
export default function FormuInput ({type="", value, placeholder, onChange, label, className="f-input"}) {

    return (
        <div className="form-input">
            <label> {label} : </label>
            <input
             type= {type}
             value={value}
             onChange={onChange}
             placeholder= {placeholder}
             className={`custom-input ${className}`}
              />

        </div>
    )
}