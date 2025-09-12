// CORRECTIONS & VERSION FINALE DU TP DE SYNTHESE REACT NIVEAU 2

// 1. ProfileCard.jsx
import { useState } from "react";
import ToggleCard from "./ToggleCard";
import { utilisateurs } from "./data";

export default function ProfileCard() {
  return (
    <div className="section">
      {utilisateurs.map((ut) => (
        <Card key={ut.id} user={ut} />
      ))}
    </div>
  );
}

function Card({ user }) {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  return (
    <div className="card">
      <div className="card-header">
        <h3>
          {user.prenom} {user.nom}
        </h3>
        <span>{user.profil}</span>
      </div>
      <div className="card-body">
        <ToggleCard description={user.description} />
      </div>
      <div className="card-footer">
        <button onClick={() => setLike(like + 1)}>👍🏾 {like}</button>
        <button onClick={() => setDislike(dislike + 1)}>👎🏾 {dislike}</button>
      </div>
    </div>
  );
}

// 2. ProfileForm.jsx
//import { useState } from "react";

export default function ProfileForm({ ajouter }) {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!prenom || !nom) return;
    ajouter({ prenom, nom });
    setPrenom("");
    setNom("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="prenom">
        Prénom :
        <input
          type="text"
          id="prenom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />
      </label>
      <label htmlFor="nom">
        Nom :
        <input
          type="text"
          id="nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
      </label>
      <button type="submit" disabled={!prenom || !nom}>
        Envoyer
      </button>
    </form>
  );
}

// 3. ProfileList.jsx
export default function ProfileList({ utilisateurs }) {
  return (
    <>
      {utilisateurs.map((u, i) => (
        <div key={i} className="user">
          <ul>
            <li>
              {i + 1}. Bonjour <span>{u.prenom} {u.nom}</span>
            </li>
          </ul>
          <span>
            Voici votre Email : <i>{u.prenom}.{u.nom}@contact.com</i>
          </span>
        </div>
      ))}
    </>
  );
}

// 4. ToggleCard.jsx
import { useState } from "react";

export default function ToggleCard({ description }) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {visible && <p>{description}</p>}
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Voir moins" : "Voir plus"}
      </button>
    </>
  );
}

// 5. Home.jsx
import { useState } from "react";
import ProfileCard from "./ProfileCard";
import ProfileForm from "./ProfileForm";
import ProfileList from "./ProfileList";

export default function Home() {
  const [utilisateurs, setUtilisateurs] = useState([]);

  const ajouter = (utilisateur) => {
    setUtilisateurs([...utilisateurs, utilisateur]);
  };

  return (
    <div className="container">
      <section className="sec-cards">
        <ProfileCard />
      </section>
      <section className="sec-form">
        <ProfileForm ajouter={ajouter} />
      </section>
      <section className="sec-list">
        <ProfileList utilisateurs={utilisateurs} />
      </section>
    </div>
  );
}

// 6. data.js
export const utilisateurs = [
  {
    id: 1,
    prenom: "Issa",
    nom: "Diouf",
    profil: "Etudiant",
    description: "Bonjour, je suis Issa, étudiant en droit licence 3."
  },
  {
    id: 2,
    prenom: "Maimouna",
    nom: "Sow",
    profil: "Professeur Informatique",
    description:
      "Bonjour, je suis Maimouna, professeur en informatique et chercheuse en big data."
  }
];
