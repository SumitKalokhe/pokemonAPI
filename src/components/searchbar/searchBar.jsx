import React, { useContext } from 'react';
import './searchbar.css'
import { PokemonContext } from '../context/PokemonContext';



const Searchbar = () => {


  const { searchInput, setSearchInput , searchedPokemon} = useContext(PokemonContext)

  const onSearch = (e) =>{
     setSearchInput(e.target.value)
    }
    // console.log(searchInput);
    // searchedPokemon(searchInput)

    
  return (
    <div className='searchbar'>
      <input className="input-box" type="text" placeholder='enter pokemon name' value={searchInput} onChange={onSearch} />
      <div className='search-icon-box'><i className="fi fi-rr-search search-icon" onClick={()=>searchedPokemon(searchInput) }></i></div>
    </div>
  );
}
export default Searchbar;