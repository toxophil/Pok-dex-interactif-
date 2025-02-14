import React, { useState } from "react";
import PokemonCard from "./PokemonCard";
import pokemonData from "../data/pokemon.json";

function Pokedex() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9; // 🛠️ Ajuste selon la taille d'affichage

  // 📌 Nombre total de pages
  const totalPages = Math.ceil(pokemonData.length / itemsPerPage);

  // 🏆 Pokémon affichés sur la page actuelle
  const displayedPokemon = pokemonData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  // 🔄 Gestion des boutons Suivant / Précédent
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 0));

  return (
    <div>
      <h1>Pokédex</h1>
      <div className="pokedex">
        {displayedPokemon.map((pokemon) => (
          <PokemonCard key={pokemon.Name} pokemon={pokemon} />
        ))}
      </div>

      {/* 🛠️ Pagination */}
      <div className="pagination">
        <button onClick={handlePrev} disabled={currentPage === 0}>⬅ Précédent</button>
        <span>Page {currentPage + 1} / {totalPages}</span>
        <button onClick={handleNext} disabled={currentPage === totalPages - 1}>Suivant ➡</button>
      </div>
    </div>
  );
}

export default Pokedex;
