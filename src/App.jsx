import React from 'react'
import Searchbar from './components/searchbar/searchBar'
import Pokemons from './components/pokemonList/Pokemons'


const App = () => {
  return (
    <div>
      <Searchbar/>
      <Pokemons/>
    </div>
  )
}

export default App