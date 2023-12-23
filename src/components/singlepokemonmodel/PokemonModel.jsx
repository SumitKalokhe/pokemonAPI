import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PokemonContext } from '../context/PokemonContext'
import PokemonStats from '../pokemonstats/PokemonStats'
import "./pokemonModel.css"

const API = "https://pokeapi.co/api/v2/pokemon"
const PokemonModel = () => {

  const { getPokemonModel } = useContext(PokemonContext)
  const { id } = useParams()
  const { pokemonStats } = useContext(PokemonContext)

  // console.log("This is id: ",id);
  // console.log(`this is url of model: ${API}/${id}` );

  useEffect(() => {
    getPokemonModel(`${API}/${id}`)
  }, [id])

  // console.log(pokemonStats);
  return (
    <div className='pokemon-stat-model'>
      {pokemonStats.map((stats, index)=>{
        return <PokemonStats key={index} stats={stats}/>
      })}
    </div>
  )
}

export default PokemonModel


