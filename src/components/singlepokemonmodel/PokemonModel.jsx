import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PokemonContext } from '../context/PokemonContext'
import PokemonStats from '../pokemonstats/PokemonStats'
import "./pokemonModel.css"

const API = "https://pokeapi.co/api/v2/pokemon"
const PokemonModel = () => {

  const { getPokemonModel } = useContext(PokemonContext)
  const { id } = useParams()
  const { pokemonStats, pokemonId } = useContext(PokemonContext)

  const pokemonImgUrl = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`


  useEffect(() => {
    getPokemonModel(`${API}/${id}`)
  }, [id])

  // console.log(pokemonStats);
  return (


    /* here put pokemon img not in PokemonStats.jsx */
    <div className='pokemon-stat-card'>
      <div className='stat-pokemon-img-box'>
        <img className="stat-pokemon-img" src={pokemonImgUrl} alt="" />
      </div>
      <div className='pokemon-stat-model'>
        {pokemonStats.map((stats, id) => {
          return <PokemonStats key={id} stats={stats} pokemonImg={pokemonImgUrl} />
        })}
      </div>
    </div>
  )
}

export default PokemonModel


