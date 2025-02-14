import React from "react";
import PokemonCard from "./PokemonCard";

function Pokedex({ pokemonList }) {
  return (
    <div className="pokedex">
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.Name} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default Pokedex;
