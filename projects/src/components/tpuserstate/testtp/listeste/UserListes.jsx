export default function UserListes({ utilisateurs }) {
  return (
    <div>
      {utilisateurs.length === 0 ? (
        <p>Aucun utilisateur enregistré.</p>
      ) : (
        <ul>
          {utilisateurs.map((u, index) => (
            <li key={index}>
              {index + 1}. {u.prenom} {u.nom}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
