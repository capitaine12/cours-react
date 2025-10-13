import Button from "./Button";
import FormuInput from "./FormInput";


export default function InputButton({type="text",value="",onChange,placeholder,label, handleClick}) {
   
    
    const handleSubmit = () => {

    }
   
   
    return (
        <>
        <form style={{display: "flex"}} onSubmit={handleSubmit} >
                    <FormuInput 
                    type={type}
                    value={value}
                    onChange={onChange}
                    className="searchInput"
                    placeholder={placeholder}
                    />

                    <Button 
                    className="searchButton"
                    label={label }
                    type="submit"
                    onClick={handleClick}

                    />
                </form>
        </>
    )
}