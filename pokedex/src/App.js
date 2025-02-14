import React, { useState, useEffect } from "react";
import Pokedex from "./components/Pokedex"; // Vérifie le chemin
import pokemonData from "./data/pokemon.json"; // Vérifie ce fichier

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    setPokemonList(pokemonData);
  }, []);

  return (
    <div>
      <h1>"Bienvenue dans l’Univers Pokémon ! 🌟"</h1>
      <Pokedex pokemonList={pokemonList} />
    </div>
  );
}

export default App;
