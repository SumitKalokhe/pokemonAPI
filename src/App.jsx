import React from 'react'
import Searchbar from './components/searchbar/searchBar'
import Pokemons from './components/pokemonList/Pokemons'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PokemonModel from './components/singlepokemonmodel/PokemonModel'
import "./app.css"


const App = () => {
  return (
    <div className='home-page'>
      <Router>
        <Searchbar />
        <Routes>
          <Route path='/' element={<Pokemons />}/>
          <Route path='/:id' element={<PokemonModel />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App