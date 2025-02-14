import React, { useState, useEffect } from "react";
import Pokedex from "./components/Pokedex";
import pokemonData from "./data/pokemon.json";

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    setPokemonList(pokemonData);
  }, []);

  return (
    <div>
      <h1>Pokédex</h1>
      <Pokedex pokemonList={pokemonList} />
    </div>
  );
}

export default App;
