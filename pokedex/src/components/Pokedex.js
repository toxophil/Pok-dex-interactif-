import React, { useState } from "react";
import PokemonCard from "./PokemonCard";
import pokemonData from "../data/pokemon.json";

function Pokedex() {
  const [pokemonList] = useState(pokemonData);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const filteredPokemon = pokemonList.filter((pokemon) =>
    pokemon.Name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedType === "" || pokemon.Type1 === selectedType || pokemon.Type2 === selectedType)
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher un Pokémon..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select onChange={(e) => setSelectedType(e.target.value)}>
        <option value="">Tous les types</option>
        <option value="Fire">Feu</option>
        <option value="Water">Eau</option>
        <option value="Grass">Plante</option>
        <option value="Electric">Électrique</option>
      </select>

      <div className="pokedex">
        {filteredPokemon.map((pokemon) => (
          <PokemonCard key={pokemon.Name} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default Pokedex;
