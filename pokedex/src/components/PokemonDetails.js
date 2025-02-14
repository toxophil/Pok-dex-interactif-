import React from "react";
import Modal from "react-modal";
import icons from "../data/icons.json";

Modal.setAppElement("#root");

function PokemonDetails({ pokemon, onClose, backgroundStyle }) {
  if (!pokemon) return null;

  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
      borderRadius: "10px",
      padding: "20px",
      background: backgroundStyle.background, // Appliquer le même dégradé !
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
      color: "#fff", // Texte blanc pour un meilleur contraste
    },
  };

  return (
    <Modal
      isOpen={!!pokemon}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      style={modalStyles}
      contentLabel="Détails du Pokémon"
    >
      <h2>{pokemon.Name}</h2>
      <img 
        src={`/images/${pokemon.Name.toLowerCase()}.png`} 
        alt={pokemon.Name} 
        style={{ width: "100px", height: "100px", objectFit: "contain" }} 
      />
      <p>Type: {pokemon.Type1} {pokemon.Type2 && `/ ${pokemon.Type2}`}</p>

      {/* Icônes des types */}
      <div className="pokemon-types-modal">
  {icons[pokemon.Type1] && (
    <div
      className="type-icon-modal pulsing glow"
      style={{ "--type-color": `#${icons[pokemon.Type1]?.color || "ccc"}` }}
      dangerouslySetInnerHTML={{ __html: icons[pokemon.Type1].svg }}
    />
  )}
  {pokemon.Type2 && icons[pokemon.Type2] && (
    <div
      className="type-icon-modal pulsing glow"
      style={{ "--type-color": `#${icons[pokemon.Type2]?.color || "ccc"}` }}
      dangerouslySetInnerHTML={{ __html: icons[pokemon.Type2].svg }}
    />
  )}
</div>


      {pokemon.Evolution && <p>Évolution: {pokemon.Evolution}</p>}

      <button className="close-button" onClick={onClose}>
        Fermer
      </button>
    </Modal>
  );
}

export default PokemonDetails;
