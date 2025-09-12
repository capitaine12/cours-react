import { useEffect, useState } from "react"
import loading from '../assets/loader.gif'
import styles from '../styles/Pokemonstyle.module.css'

export default function Pokemon() {
    const [pokemons, setPokemons] = useState([]); // liste de base (nom + url)
    const [selectedPokemon, setSelectedPokemon] = useState(null); // l'objet sélectionné
    const [details, setDetails] = useState(null); // détail du pokémon
    const [loadingList, setLoadingList] = useState(true);
    const [loadingDetails, setLoadingDetails] = useState(false);

    function handleClick(url) {

        setSelectedPokemon((prev) => (prev == url ? null : url))
    }

    //chargement de la liste des pokemon

    useEffect(() => {

        const timer = setTimeout(() => {
            fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
                .then((rep) => rep.json())
                .then((data) => {
                    setPokemons(data.results)
                    setLoadingList(false)
                })
                .catch((err) => {
                    console.error("Erreur de chargement des pokermon", err);
                    setLoadingList(false)
                })

        }, 2000);

        return () => clearTimeout(timer)

    }, []);

    // chargement des detailles d'un pokemon

    useEffect(() => {
        if (!selectedPokemon) return

        setLoadingDetails(true)
        fetch(selectedPokemon)
            .then((res) => res.json())
            .then((data) => {
                setDetails(data)
                setLoadingDetails(false)
            })
            .catch((err) => {
                console.error("Erreur de chargement des detail du pokemon ", err);
                setLoadingDetails(false)

            })

    }, [selectedPokemon]);


    if (loadingList) return <img src={loading} />
    //if (err) return <p>Une erreur est survenue lors du chargement.</p>

    return (
        <div>
            {/* chargement de la liste des pokemon */}
            <div className={styles.liste}>
                <ul>
                    {
                        Array.isArray(pokemons) && pokemons.map((pokemon, index) =>

                            <li key={index} onClick={() => handleClick(pokemon.url)}>
                                <strong className={styles.name} >{pokemon.name} </strong>
                                {/* Chargement du détail */}
                                {selectedPokemon === pokemon.url && (
                                    loadingDetails ? (
                                        <p>Chargement des détails...</p>
                                    ) : (
                                        details && (
                                            <div className={styles.carte}>
                                                <div className={styles.carttop}>
                                                    <img src={details.sprites.front_default} alt={details.name} />
                                                </div>
                                                <div className={styles.cartebody}>{details.name}</div>
                                                <div className={styles.cartefooter}>
                                                    <p><strong>Poids :</strong> {details.weight / 10} Kg</p>
                                                    <p><strong>Taille :</strong> {details.height / 10} m</p>
                                                </div>
                                            </div>
                                        )
                                    )
                                )}

                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}