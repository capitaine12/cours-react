import '../../styles/UserList.css'
import Button from '../partial-cards/Button'

export default function UserList({utilisateurs, supprimer, updateUser}) {
  

    return (
        <>
        <table>
          <caption>Liste des utilisateus</caption>
          <thead>
            <tr>
              <th>N°</th>
              <th>Prénom</th>
              <th>Nom</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           {
            utilisateurs.map((u, index) =>
            <tr key={u.mail}>
            <td> {index + 1} </td>
            <td>{u.prenom.charAt(0).toUpperCase() + u.prenom.slice(1)}</td>
            <td>{u.nom.charAt(0).toUpperCase() + u.nom.slice(1)}</td>
              <td>{u.mail} </td>
              <td>
                <div className="btn-action">
                  <Button  className='btn-unlike' onClick={()=> supprimer(u.mail)} label={"Supprimer"} />
                  <Button className='btn-update' onClick={() =>  updateUser(u) } label={"Modifier"} />
              </div>
              </td>
            </tr>
            )
           }
          </tbody>
        </table>
        </>
    )
}
