import React from "react";

const Pokemon = ({data}) => {
  return (
    <div>
      <h2>{data.name}, {data.num}</h2>
      <p>Type</p>
      <ul>
        {data.type.map(type => <li key={type}>{type}</li>)}
      </ul>

      <p>Weaknesses</p>
      <ul>
        {data.weaknesses.map(weakness => <li key={weakness}>{weakness}</li>)}
      </ul>
    </div>
  );
}

export default Pokemon;