import './App.css';
import React from "react";
import { PokemonProvider } from "./contexts/PokemonContext"; 
import PokemonList from "./components/PokemonList";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";

function App() {
  return (
    <PokemonProvider>
      <SearchBar />
      <Filter />
      <hr />
      <PokemonList />
    </PokemonProvider>
  );
}

export default App;
