import axios from "axios";
import React, { useState, useEffect } from 'react'
import PokeCard from "./components/PokeCard";

export default function App() {
  
  const [pokeName, setpokeName] = useState('')
  const [pokeList, setpokeList] = useState([])

  
  const getPokes = () => {
      axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
       setpokeList(response.data.results)
      })
      .catch(err => {
        console.log(err);
      });
  };

  const changePokeName = (event) => {
    setpokeName(event.target.value)
  };
  
  useEffect(() => {
    if (pokeList == '') {
      getPokes()
     
    }   
   })
  
    return ( 
      <div className="App">
        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
             {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
            {pokeName && <PokeCard poke={pokeName} />}
      </div>
    );
  
}

