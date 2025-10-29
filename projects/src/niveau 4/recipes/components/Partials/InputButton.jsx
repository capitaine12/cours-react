import  "../../styles/InputButton.css";

export default function InputButton({
  type = "text",
  value,
  onChange,
  placeholder,
  buttonText = "",
  onClick,
  variant=''
}) {
  return (
    <>
    <form action="" className="container">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`input ${variant}Input`}
      />
      <button onClick={onClick} 
      className={`button ${variant}Button`}>
        {buttonText}
      </button>
      </form>
    </>
  )
}
