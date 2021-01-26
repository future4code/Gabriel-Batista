import React, { useState, useEffect } from 'react'
import axios from "axios";

export default function PokeCard(poke) {

  const [pokemondata, setpokemondata] = useState([])

  useEffect(() => {
    if (pokemondata.name !== poke.poke) {
      pegaPokemon(poke);
      }
  })


  const pegaPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${poke.poke}`)
      .then(response => {
            setpokemondata(response.data)
      })
      .catch(err => {
        console.log(err);
      });
  };

    return (
      <div>
        {console.log(poke)}
        {console.log('pokemondata :>> ', pokemondata)}
        <p>{poke.poke}</p>
        <p>{pokemondata.weight} Kg</p>
        {pokemondata.types && <p>{pokemondata.types[0].type.name}</p>}
        {pokemondata.sprites && (
          <img src={pokemondata.sprites.front_default} alt={pokemondata.name} />
        )}
      </div>
    );
  }


