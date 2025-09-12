import { useState } from "react";

export default function Formulaires() {
  const [prenom, setPrenom] = useState('');
  const [sms, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici on enregistre le prénom dans le message
    setMessage(`Vous êtes ${prenom}`);
  };

  return (
    <div>
      <p>{sms}</p>

      <fieldset>
        <legend>Formulaire</legend>
        <form onSubmit={handleSubmit}>
          <label>Prénom : </label>
          <input
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
          />
          <button type="submit">Envoyer</button>
        </form>
      </fieldset>
    </div>
  );
}

/* 
import React, { useState } from 'react';

function MyButton() {
  const [message, setMessage] = useState('');

  function handleClick() {
    setMessage('Vous avez cliqué !');
  }

  return (
    <div>
      <button onClick={handleClick}>
        Cliquez ici
      </button>
       Affichage du message dans le DOM 
      {message && <p>{message}</p>}
    </div>
  );
}


*/