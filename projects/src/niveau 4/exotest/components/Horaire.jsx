import React, { useState, useEffect } from "react";

export default function Horaires() {
    const jours = [
        { jour: "Lundi", horaires: "08h - 19h" },
        { jour: "Mardi", horaires: "08h - 19h" },
        { jour: "Mercredi", horaires: "08h - 19h" },
        { jour: "Jeudi", horaires: "08h - 19h" },
        { jour: "Vendredi", horaires: "08h - 18h" },
        { jour: "Samedi", horaires: "08h - 17h30" },
        { jour: "Dimanche", horaires: "Fermer" },
    ];

    const [heureActuelle, setHeureActuelle] = useState(new Date());

    // Mise à jour de l'heure chaque minute
    useEffect(() => {
        const timer = setInterval(() => setHeureActuelle(new Date()), 60000);
        return () => clearInterval(timer);
    }, []);

    // Jour actuel dans notre tableau (0 = lundi, etc.)
    const todayIndex = new Date().getDay();
    const mapping = [6, 0, 1, 2, 3, 4, 5];
    const jourActuel = mapping[todayIndex];

    // Fonction pour savoir si on est ouvert
    const estOuvert = (horaires) => {
        if (horaires.toLowerCase() === "fermer") return false;

        const [ouverture, fermeture] = horaires.split(" - ");
        const [ouvertureH, ouvertureM] = ouverture.replace("h", ":").split(":").map(Number);
        const [fermetureH, fermetureM] = fermeture.replace("h", ":").split(":").map(Number);

        const heure = heureActuelle.getHours();
        const minutes = heureActuelle.getMinutes();

        const ouvertureMinutes = ouvertureH * 60 + ouvertureM;
        const fermetureMinutes = fermetureH * 60 + fermetureM;
        const maintenantMinutes = heure * 60 + minutes;

        return maintenantMinutes >= ouvertureMinutes && maintenantMinutes <= fermetureMinutes;
    };

    return (
        <div>
            <h2>
                {estOuvert(jours[jourActuel].horaires) ? (
                    <span style={{ color: "green" }}>Ouvert</span>
                ) : (
                    <span style={{ color: "red" }}>Fermé</span>
                )}
            </h2>

            <ul>
                {jours.map(({ jour, horaires }, index) => {
                    let style = {};

                    if (index === jourActuel && horaires.toLowerCase() !== "fermer") {
                        style.color = "green";
                    }
                    if (horaires.toLowerCase() === "fermer") {
                        style.color = "red";
                    }

                    return (
                        <li key={jour}>
                            {horaires.toLowerCase() === "fermer" ? (
                                <>
                                    <span style={style}>{horaires}</span> {jour}
                                </>
                            ) : (
                                <>
                                    <span style={style}>{horaires} :</span> {jour}
                                </>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}
