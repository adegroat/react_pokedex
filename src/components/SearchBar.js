import { useState, useContext } from "react";
import { PokemonContext } from "../contexts/PokemonContext"

const SearchBar = (props) => {

  const { query, setQuery } = useContext(PokemonContext);

  return (
    <>
      <input 
        type="text" 
        placeholder="Search" 
        onChange={ (e) => setQuery(e.target.value) } />
    </>
  );
}

export default SearchBar;