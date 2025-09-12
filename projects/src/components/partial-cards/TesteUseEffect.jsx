import { useEffect, useState } from "react";

export default function TesteUseEfect() {

    const [count, setCount] = useState(0);
    const [message, setMessage] = useState(true)
    const [loading, setLoading] = useState(true);
    const [donnees, setDonnees] = useState(null);

/*   useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => clearTimeout(timer)
  },[]);

  */

//execice 1
  useEffect(() => {
   const timer = setTimeout(() => {
    setMessage(false)
   }, 3000);
    return () => {clearTimeout(timer)}
  }, []);

  //exercice 3
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1)
    },1000)
    return () => (clearInterval(timer))
  }, []);
  
  //exercice 2
 useEffect(() => {
    const timer = setTimeout(() => {
      setDonnees({ nom: "Senateur", ville: "Thiès" });
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  
  
  
  return (
    <div>
      <div >{message && <h1>Bienvenue sur mon site</h1>}</div>
      <h2>{`cont a rebour :  ${count}`}</h2>

      {loading ? <p>⏳ Chargement des données...</p> : (
      <div>
      <h3>Données reçues :</h3>
      <p>Nom : {donnees.nom}</p>
      <p>Ville : {donnees.ville}</p>
    </div>)
    }

    </div>
    
  )
    
} 