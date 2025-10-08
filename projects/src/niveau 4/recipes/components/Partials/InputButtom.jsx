import { FiSearch } from "react-icons/fi";
import Button from "./Button";
import FormuInput from "./FormInput";


export default function InputButton({handelSearch,searchrecip}) {
    return (
        <>
        <form style={{display: "flex"}}>
                    <FormuInput 
                    type="search"
                    value={searchrecip}
                    onChange={handelSearch}
                    className="searchInput"
                    placeholder={"Rechercher une recette..."}
                    />

                    <Button 
                    className="searchButton"
                    label={
                        <FiSearch />
                    }

                    />
                </form>
        </>
    )
}