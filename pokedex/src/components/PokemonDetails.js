import React from "react";
import Modal from "react-modal";

const customStyles = {
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
    backgroundColor: "#fff",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
  },
};

Modal.setAppElement("#root"); // Assure l'accessibilité

function PokemonDetails({ pokemon, onClose }) {
  if (!pokemon) return null;

  return (
    <Modal
      isOpen={!!pokemon}
      onRequestClose={onClose} // Ferme la modale avec ESC et clic en dehors
      shouldCloseOnOverlayClick={true}
      style={customStyles}
      contentLabel="Détails du Pokémon"
    >
      <h2>{pokemon.Name}</h2>
      <img 
        src={`/images/${pokemon.Name.toLowerCase()}.png`} 
        alt={pokemon.Name} 
        style={{ width: "100px", height: "100px", objectFit: "contain" }} 
      />
      <p>Type: {pokemon.Type1} {pokemon.Type2 && `/ ${pokemon.Type2}`}</p>
      {pokemon.Evolution && <p>Évolution: {pokemon.Evolution}</p>}

      {/* Bouton de fermeture */}
      <button 
        className="close-button" 
        onClick={() => {
          console.log("🛑 Bouton 'Fermer' cliqué !");
          onClose();
        }}
      >
        Fermer
      </button>
    </Modal>
  );
}

export default PokemonDetails;
