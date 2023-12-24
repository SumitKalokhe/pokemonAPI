import React, { useContext } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import './pokemonlist.css'
import { PokemonContext } from '../context/PokemonContext'

const PokemonList = ({ name, url, details, id, img, stats, types }) => {

    const { filter } = useContext(PokemonContext)

    const pokemonType = types.map((type) => {

        return type.type.name
    })

    const pokemonTypeStr = pokemonType[0]
    // console.log("filter is: ", filter);
    // console.log("pokemon type is: ", pokemonTypeStr);
    // console.log("data type of filter is: ", typeof filter);
    // console.log("data type of pokemon type is: ", typeof pokemonTypeStr);

    // console.log(filter === pokemonTypeStr);

    if (filter === 'all type') {

        return (


            <NavLink to={`/${id}`} className="pokemon-card-navlink">
                <div className='pokemon-card'>
                    <div className='pokemon-card-id'>{id}</div>
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


    switch (filter) {

        case pokemonTypeStr:
            return (
                <NavLink to={`/${id}`} className="pokemon-card-navlink">
                    <div className='pokemon-card'>
                        <div className='pokemon-card-id'>{id}</div>
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
            break;
        default:
            break;
    }
}


export default PokemonList
