import React from 'react'
import { useParams } from 'react-router-dom'

const PokemonList = ({ name, url, details, index, img}) => {

    return (
        <div className='pokemon-card'>
            <div>{name}</div>
            <div>{url}</div>
            <img src={img} alt={name} />
        </div>
    )
}

export default PokemonList