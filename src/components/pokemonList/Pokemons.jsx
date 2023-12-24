import React, { useContext, useEffect } from 'react'
import { PokemonContext } from '../context/PokemonContext'
import PokemonList from './PokemonList'
import "./pokemonlist.css"

const Pokemons = () => {

  const { pokemons, pokemonId } = useContext(PokemonContext)


  // console.log(pokemons);
  // useEffect(()=>{

  // });

  return (
    <div className='pokemon-card-grid'>
      {...pokemons.map((pokemon, index) => {
        const imgUrl = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemonId? pokemonId: index+1}.svg`
        return <PokemonList key={index} {...pokemon} img={imgUrl} stats={pokemon.details.stats} types={pokemon.details.types} id={pokemonId ? pokemonId: index+1}/>
      })}
    </div>
  )
}

export default Pokemons