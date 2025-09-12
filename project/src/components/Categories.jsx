import Button from "./button";
import '../styles/button.css'


export default function Categories({ setActiveCategory, categories, activeCategory }) {

    return (
        
        <div className="sect-cat">
            <select
            value={activeCategory}
            onChange={(e)=> setActiveCategory(e.target.value)}
             className="lmj-categories-select"
             >
                <option value="">Categories</option>
                {
                    categories.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat}
                        </option>
                    ))
                }
            </select>
            <Button label={"Reinitialise"} className="ajouter" onClick={() => setActiveCategory('')} />
        </div>
    )
}

 /*  {
               categories.map((cat)=>( //on recuper des categori des plantes sur un li
                <li key={cat}> {cat.toUpperCase()} </li>
                ))} */