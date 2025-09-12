import { useState, useEffect } from "react";
import FormUser from "./FormUser";
import UserListes from "./UserListes";

export default function HomeUser() {
  const [utilisateurs, setUtilisateurs] = useState(() => {
    const data = localStorage.getItem("utilisateurs");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem("utilisateurs", JSON.stringify(utilisateurs));
  }, [utilisateurs]);

  const ajouterUtilisateur = (utilisateur) => {
    setUtilisateurs([...utilisateurs, utilisateur]);
  };

  const resetUtilisateurs = () => {
    localStorage.removeItem("utilisateurs");
    setUtilisateurs([]);
  };

  return (
    <>
      <FormUser ajouter={ajouterUtilisateur} />
      <UserListes utilisateurs={utilisateurs} />

      {/* Bouton pour tout réinitialiser */}
      <button onClick={resetUtilisateurs} className="btn-reset">
        Réinitialiser la liste
      </button>
    </>
  );
}
