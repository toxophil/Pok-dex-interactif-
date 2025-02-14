import React from "react";

function PokemonDetails({ pokemon, onClose }) {
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
