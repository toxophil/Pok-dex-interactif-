import React from "react";

function PokemonDetails({ pokemon, onClose }) {
  return (
    <div className="pokemon-details">
      <div className="details-content">
        <h2>{pokemon.Name}</h2>
        <img src={`/images/${pokemon.Name}.png`} alt={pokemon.Name} />
        <p>Type: {pokemon.Type1} {pokemon.Type2 && `/ ${pokemon.Type2}`}</p>
        {pokemon.Evolution && <p>Évolution: {pokemon.Evolution}</p>}
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
}

export default PokemonDetails;
