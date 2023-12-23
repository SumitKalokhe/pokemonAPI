import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PokemonContext } from '../context/PokemonContext'

const API="https://pokeapi.co/api/v2/pokemon"
const PokemonModel = () => {

  const {getPokemonModel}= useContext(PokemonContext)
  const {id}= useParams()
  console.log("This is id: ",id);
  console.log(`this is url of model: ${API}/${id}` );

  useEffect(()=>{
    getPokemonModel(`${API}/${id}`)
  }, [id])
  return (
    <div>PokemonModel</div>
  )
}

export default PokemonModel


