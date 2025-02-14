import React, { useState } from "react";
import PokemonDetails from "./PokemonDetails";
import icons from "../data/icons.json";

function PokemonCard({ pokemon }) {
  const [showDetails, setShowDetails] = useState(false);

  const color1 = `#${icons[pokemon.Type1]?.color || "ccc"}`;
  const color2 = pokemon.Type2 ? `#${icons[pokemon.Type2]?.color || "ccc"}` : color1;

  const backgroundStyle = {
    background: `linear-gradient(135deg, ${color1}, ${color2})`,
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    padding: "15px",
    borderRadius: "10px",
    textAlign: "center",
    cursor: "pointer",
  };

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
        onError={(e) => (e.target.src = "/images/default.png")}
        style={{ width: "80px", height: "80px", objectFit: "contain" }}
      />
      <p>Type: {pokemon.Type1} {pokemon.Type2 && `/ ${pokemon.Type2}`}</p>

      {/* Modale des détails du Pokémon */}
      {showDetails && (
        <PokemonDetails 
          pokemon={pokemon} 
          onClose={() => {
            console.log("✅ Fermeture demandée depuis PokemonCard !");
            setTimeout(() => setShowDetails(false), 0);
          }} 
        />
      )}
    </div>
  );
}

export default PokemonCard;
