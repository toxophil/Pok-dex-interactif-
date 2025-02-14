import React, { useState } from "react";
import PokemonCard from "./PokemonCard";
import pokemonData from "../data/pokemon.json";

function Pokedex() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9; // Nombre de Pokémon affichés par page

  // 🛠️ Récupérer tous les types disponibles dans pokemon.json
  const allTypes = [
    ...new Set(pokemonData.flatMap(pokemon => [pokemon.Type1, pokemon.Type2].filter(Boolean)))
  ].sort();

  // 🎯 Filtrer les Pokémon en fonction du texte et du type sélectionné
  const filteredPokemon = pokemonData.filter((pokemon) =>
    pokemon.Name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedType === "" || pokemon.Type1 === selectedType || pokemon.Type2 === selectedType)
  );

  // 📌 Nombre total de pages après filtrage
  const totalPages = Math.ceil(filteredPokemon.length / itemsPerPage);

  // 🏆 Pokémon affichés sur la page actuelle
  const displayedPokemon = filteredPokemon.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  // 🔄 Gestion des boutons "Suivant" et "Précédent"
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 0));

  // 🔄 Remettre à la première page si le filtrage change
  const handleFilterChange = (e) => {
    setSelectedType(e.target.value);
    setCurrentPage(0); // Réinitialiser la pagination
  };

  return (
    <div>
      <p>Pars à la découverte des créatures fascinantes qui peuplent le monde Pokémon.
        Cherche, filtre et explore les différentes espèces pour en apprendre plus sur leurs types et évolutions.
        Es-tu prêt à tous les attraper ? 🚀🔥
      </p>

      {/* 🔍 Barre de recherche */}
      <input
        type="text"
        placeholder="Rechercher un Pokémon..."
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(0); // Réinitialiser la page à 0 lors de la recherche
        }}
      />

      {/* 🎯 Menu déroulant pour filtrer par type */}
      <select onChange={handleFilterChange}>
        <option value="">Tous les types</option>
        {allTypes.map((type) => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>

      {/* 🏆 Affichage des Pokémon filtrés par page */}
      <div className="pokedex">
        {displayedPokemon.length > 0 ? (
          displayedPokemon.map((pokemon) => (
            <PokemonCard key={pokemon.Name} pokemon={pokemon} />
          ))
        ) : (
          <p>Aucun Pokémon trouvé.</p>
        )}
      </div>

      {/* 🔄 Pagination */}
      {filteredPokemon.length > itemsPerPage && (
        <div className="pagination">
          <button onClick={handlePrev} disabled={currentPage === 0}>⬅ Précédent</button>
          <span>Page {currentPage + 1} / {totalPages}</span>
          <button onClick={handleNext} disabled={currentPage === totalPages - 1}>Suivant ➡</button>
        </div>
      )}
    </div>
  );
}

export default Pokedex;
