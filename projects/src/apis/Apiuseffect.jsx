import { useEffect, useState } from "react";
import  Loader  from "../assets/loader.gif";

export default function Apiuseeffect() {
    const [titres, setTitre] = useState([])
    const [loading, setLoading] = useState(true)
     const [error, setError] = useState(false);

     useEffect(() => {
    const timer = setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erreur HTTP !");
          }
          return response.json();
        })
        .then((data) => {
          setTitre(data.slice(0, 10)); // Affiche les 10 premiers
          setLoading(false);
        })
        .catch((error) => {
          console.error("Erreur lors du fetch :", error);
          setError(true);
          setLoading(false);
        });
    }, 4500); // petit délai simulé

    return () => clearTimeout(timer);
  }, []);


    if (loading) return <img src={Loader} />
    if (error) return <p>Une erreur est survenue lors du chargement.</p>

    return (

        <div>
            <ol>
                { 
                titres.map((titre) =>
                    <li key={titre.id}>
                      {titre.address.suite}</li>
                )
            }
            </ol>
        </div>
    )
}