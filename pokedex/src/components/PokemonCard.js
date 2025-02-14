import React, { useState } from "react";
import PokemonDetails from "./PokemonDetails";
import icons from "../data/icons.json";

function PokemonCard({ pokemon }) {
  const [showDetails, setShowDetails] = useState(false);

  // Récupération des couleurs associées aux types du Pokémon
  const color1 = `#${icons[pokemon.Type1]?.color || "ccc"}`;
  const color2 = pokemon.Type2 ? `#${icons[pokemon.Type2]?.color || "ccc"}` : color1;

  const backgroundStyle = {
    background: `linear-gradient(135deg, ${color1}, ${color2})`,
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    padding: "15px",
    borderRadius: "10px",
    textAlign: "center",
    cursor: "pointer",
    border: "none",
    outline: "none",
    width: "100%",
  };

  return (
    <>
      <button
        className="pokemon-card"
        style={backgroundStyle}
        onClick={() => setShowDetails(true)}
      >
        <img
          src={`/images/${pokemon.Name.toLowerCase()}.png`}
          alt={pokemon.Name}
          style={{ width: "80px", height: "80px", objectFit: "contain" }}
        />
        <h3>{pokemon.Name}</h3>
        <p>Type: {pokemon.Type1} {pokemon.Type2 && `/ ${pokemon.Type2}`}</p>
        <div className="pokemon-types">
  {icons[pokemon.Type1] && (
    <div
      className="type-icon"
      style={{ "--type-color": `#${icons[pokemon.Type1]?.color || "ccc"}` }}
      dangerouslySetInnerHTML={{ __html: icons[pokemon.Type1].svg }}
    />
  )}
  {pokemon.Type2 && icons[pokemon.Type2] && (
    <div
      className="type-icon"
      style={{ "--type-color": `#${icons[pokemon.Type2]?.color || "ccc"}` }}
      dangerouslySetInnerHTML={{ __html: icons[pokemon.Type2].svg }}
    />
  )}
</div>
      </button>

      {/* Passer le dégradé à la modale */}
      {showDetails && (
        <PokemonDetails 
          pokemon={pokemon} 
          onClose={() => setShowDetails(false)}
          backgroundStyle={backgroundStyle} 
        />
      )}
    </>
  );
}

export default PokemonCard;
