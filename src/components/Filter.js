import { useState, useContext } from "react";
import { PokemonContext } from "../contexts/PokemonContext"

const FilterCheckbox = ({value, filterValues, setFilterValues}) => {
  return (
    <label>
      <input type="checkbox" value={value} onChange={(e) => {
        setFilterValues(
          e.target.checked ? [...filterValues, value] : filterValues.filter(i => i !== e.target.value)
        )
      }} />
      {value}
    </label>
  )
}

const Filter = (props) => {

  const { 
    typeFilter, 
    setTypeFilter, 
    weaknessFilter, 
    setWeaknessFilter, 
    types, 
    weaknesses
  } = useContext(PokemonContext);

  const typesCbs = types.map((type) => {
    return (
      <span key={type}>
        <FilterCheckbox value={type} filterValues={typeFilter} setFilterValues={setTypeFilter} />
      </span>
    )
  });

  const weaknessCbs = weaknesses.map(weakness => {
    return (
      <span key={weakness}>
        <FilterCheckbox value={weakness} filterValues={weaknessFilter} setFilterValues={setWeaknessFilter} />
      </span>
    )
  });

  return (
    <>
      <div>
        <p>Type Filter</p>
        {typesCbs}
      </div>

      <div>
        <p>Weakness Filter</p>
        {weaknessCbs}
      </div>
    </>
  );
}

export default Filter;