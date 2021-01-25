import { useState, useEffect, createContext } from "react";

const filterBy = (data, filterVals) => {
  let shouldAdd = true;

  for(const fv of filterVals) {
    if(data.indexOf(fv) === -1) {
      shouldAdd = false;
      break;
    }
  }

  return shouldAdd;
}

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [rawPokemonData, setRawPokemonData] = useState([]);
  const [types, setTypes] = useState([]);
  const [weaknesses, setWeaknesses] = useState([]);

  const [pokemonData, setPokemonData] = useState([]);
  const [query, setQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState([])
  const [weaknessFilter, setWeaknessFilter] = useState([])

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
    .then(res => res.json())
    .then((data) => {
      let types = [];
      let weaknesses = [];

      data.pokemon.forEach((pokemon) => {
        types = new Set([...types, ...pokemon.type])
        weaknesses = new Set([...weaknesses, ...pokemon.weaknesses])
      });
      
      setTypes([...types])
      setWeaknesses([...weaknesses])
      setRawPokemonData(data.pokemon);
      setPokemonData(data.pokemon);
      })
  }, []);

  useEffect(() => {
    let newData = rawPokemonData
      .filter(p => filterBy(p.type, typeFilter))
      .filter(p => filterBy(p.weaknesses, weaknessFilter))
      .filter(p => query.length ? p.name.toLowerCase().indexOf(query.toLowerCase()) !== -1 : true)

    setPokemonData(newData);
  }, [query, typeFilter, weaknessFilter]);

  return (
    <PokemonContext.Provider value={{
      pokemonData,
      query,
      setQuery,
      types,
      weaknesses,
      typeFilter,
      setTypeFilter,
      weaknessFilter,
      setWeaknessFilter
    }}>
      { children }
    </PokemonContext.Provider>
  );
}