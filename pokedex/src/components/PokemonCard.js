import React, { useState } from "react";
import PokemonDetails from "./PokemonDetails";
import icons from "../data/icons.json";

function PokemonCard({ pokemon }) {
  const [showDetails, setShowDetails] = useState(false);
  const typeColor = icons[pokemon.Type1]?.color || "#ccc";
  const imageUrl = `/images/${pokemon.Name.toLowerCase()}.png`;

  return (
    <div
      className="pokemon-card"
      style={{ backgroundColor: `#${typeColor}` }}
      onClick={() => setShowDetails(true)}
    >
      <h3>{pokemon.Name}</h3>
      <img src={imageUrl} alt={pokemon.Name} onError={(e) => e.target.src = "/images/default.png"} />
      <p>Type: {pokemon.Type1} {pokemon.Type2 && `/ ${pokemon.Type2}`}</p>

      {showDetails && (
        <PokemonDetails
          pokemon={pokemon}
          onClose={() => setShowDetails(false)} // ✅ Corrige la fermeture
        />
      )}
    </div>
  );
}

export default PokemonCard;
