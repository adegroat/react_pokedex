import React, { useState, useEffect, useContext } from "react"
import Pokemon from "./Pokemon"
import { PokemonContext } from "../contexts/PokemonContext";

const PokemonList = (props) => {
  const { pokemonData } = useContext(PokemonContext);

  return (
    <>
      <h1>Pokemon Results ({pokemonData.length})</h1>
      {
        pokemonData.map(pokemon => {
          return <Pokemon key={pokemon.name} data={pokemon} />
        })
      }
    </>
  );
}

export default PokemonList;