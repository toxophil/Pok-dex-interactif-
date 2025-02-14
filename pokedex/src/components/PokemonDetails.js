import React, { useEffect } from "react";

function PokemonDetails({ pokemon, onClose }) {
  // Ajoute une classe au body pour désactiver l'interaction en arrière-plan
  useEffect(() => {
    document.body.classList.add("modal-open");
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="pokemon-details" onClick={(e) => e.stopPropagation()}>
        <h2>{pokemon.Name}</h2>
        <img src={`/images/${pokemon.Name.toLowerCase()}.png`} alt={pokemon.Name} />
        <p>Type: {pokemon.Type1} {pokemon.Type2 && `/ ${pokemon.Type2}`}</p>
        {pokemon.Evolution && <p>Évolution: {pokemon.Evolution}</p>}
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
}

export default PokemonDetails;
