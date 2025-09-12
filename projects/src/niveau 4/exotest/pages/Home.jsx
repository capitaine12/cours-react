import { hotels  } from "../components/Hotel"
import '../styles/Acceuil.css'
export default function Home(){
  
  //
    return (
    <div> 
        <div className="banner">
          
          <h1 contentEditable role='textbox' aria-multiline='false'>Bienvenu sur la notre d'accueil</h1>
        
        </div>
         <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
      {hotels.map(hotel => (
        <div
          key={hotel.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            width: "300px",
            boxShadow: "2px 2px 6px rgba(0,0,0,0.1)"
          }}
        >
          <img
            src={hotel.image}
            alt={hotel.name}
            style={{ width: "100%", borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}
          />
          <div style={{ padding: "12px" }}>
            <h3 style={{ margin: "0 0 8px" }}>{hotel.name}</h3>
            <p style={{ margin: "0 0 4px", color: "#555" }}>{hotel.location}</p>
            <p style={{ margin: "0 0 4px" }}>
              Prix par nuit : <strong>{hotel.price_per_night} €</strong>
            </p>
            <p style={{ margin: 0 }}>Note : ⭐ {hotel.rating}</p>
          </div>
        </div>
      ))}
    </div>
    </div>)
}