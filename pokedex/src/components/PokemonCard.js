import React, { useState } from "react";
import PokemonDetails from "./PokemonDetails";
import icons from "../data/icons.json";

function PokemonCard({ pokemon }) {
  const [showDetails, setShowDetails] = useState(false);

  // 🎨 Récupérer les couleurs des types
  const color1 = `#${icons[pokemon.Type1]?.color || "ccc"}`;
  const color2 = pokemon.Type2 ? `#${icons[pokemon.Type2]?.color || "ccc"}` : color1;

  // 🎨 Dégradé entre les deux couleurs
  const backgroundStyle = {
    background: `linear-gradient(135deg, ${color1}, ${color2})`,
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
  };

  // 🖼️ Gestion de l'image avec fallback
  const imageUrl = `/images/${pokemon.Name.toLowerCase()}.png`;

  return (
    <div
      className="pokemon-card"
      style={backgroundStyle}
      onClick={() => setShowDetails(true)}
    >
      <h3>{pokemon.Name}</h3>
      <img
        src={imageUrl}
        alt={pokemon.Name}
        onError={(e) => e.target.src = "/images/default.png"}
      />
      <p>Type: {pokemon.Type1} {pokemon.Type2 && `/ ${pokemon.Type2}`}</p>

      {showDetails && (
        <PokemonDetails
          pokemon={pokemon}
          onClose={() => setShowDetails(false)}
        />
      )}
    </div>
  );
}

export default PokemonCard;
