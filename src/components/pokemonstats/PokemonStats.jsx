import React from 'react'
import './pokemonstats.css'

const PokemonStats = ({ stats }) => {

    // console.log(stats);

    const baseStat = stats.base_stat
    const statName = stats.stat.name

    return (

        <div className='pokemon-stats'>
            <div className='pokemon-stat-name'>{statName}</div>
            <div className='pokemon-base-stat'>{baseStat}</div>
        </div>
    )
}

export default PokemonStats