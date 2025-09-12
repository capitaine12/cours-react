//! creation du composant Header et l'integret dans le composant Mycomposant
function Header({color, aligne}) {
  const titre = "La maison jungle"
  return (<h1 style={{color: color , textAlign: aligne}}> {titre.toUpperCase()} </h1>)
}

function Decription() {
  //const p = "nafi"
  return <p> Bienvenu chez nous 💃</p>
}
//! cration du composant Bannier pour regrouper les composants header et descciption
//! afin de les afficher dans le DOM
function Banner() {
  return (<div>
    <Header color="blue"
     aligne= "center" />
      
    <Decription />
  </div>)
}

const personne = [
  {
    prenom: "modou",
    nom: "ba",
    id: 1

  },
  {
    prenom: "nafi",
    nom: 'lo',
    id: 2
  }
]

function Pers() {
  return (
    <div>
      <h1>nom</h1>
      <ul>
       {
        personne.map(p => 
          <li key={p.id}> {p.prenom} {p.nom} </li>
        )
       }
      </ul>
    </div>
  )
}

function Cart() {
  const prixmostera = 8
  const prixbouque = 10
  const prixlierre = 15

  return (
  <div>
    <h1>Panier</h1>
    <ul>
      <li>🌺 Mostera  {prixmostera} €</li>
      <li>💐 Bouque {prixbouque} €</li>
      <li>🌹  Lierre  {prixlierre} €</li>
    </ul>
    Total : {prixmostera + prixbouque + prixlierre} €

  </div>
  
  )

}



ReactDOM.render(
<React.Fragment>
  <Banner /> 
  <Pers/>  
  <Cart />
  </React.Fragment> ,
   document.getElementById('root'))


/* function MyComposant (pram){
  return( 
    <>
    <h3>  Bien le bonjour   {pram.item}😜
    </h3> 
      </>
      )
}

ReactDOM.render(<MyComposant  item="REACT " /> , document.getElementById('react-goes-here'));
 */
