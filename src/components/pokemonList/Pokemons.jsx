import React, { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext'
import PokemonList from './PokemonList'

const Pokemons = () => {

  const { pokemons } = useContext(PokemonContext)
  return (
    <div className='pokemon-card-grid'>
      {pokemons.map((pokemon, index) => {
        const imgUrl = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${index+1}.svg`
        return <PokemonList key={index} {...pokemon} index={index} img={imgUrl} />
      })}
    </div>
  )
}

export default Pokemons