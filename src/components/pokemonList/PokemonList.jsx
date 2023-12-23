import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import './pokemonlist.css'

const PokemonList = ({ name, url, details, id, img, stats, types }) => {

    const pokemonType = types.map((type) => {
        
        return type.type.name
    })

    return (
        <NavLink to={`/${id}`} className="pokemon-card-navlink">
            <div className='pokemon-card'>
                <img className='pokemon-card-img' src={img} alt={name} />
                <div className='pokemon-card-info'>
                    <div className='pokemon-card-name'>
                        {name}
                    </div>
                    <div className='pokemon-type-box'>
                        {pokemonType.map((type, index) => {
                            return <div key={index} className='pokemon-type'>{type}</div>
                        })}
                    </div>
                </div>
            </div>
         </NavLink>
    )
}

export default PokemonList
