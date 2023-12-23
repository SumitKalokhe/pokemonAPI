import axios from "axios";
import { createContext, useEffect, useReducer } from "react";

export const PokemonContext = createContext()

const API = "https://pokeapi.co/api/v2/pokemon/"

const initialState = {
    pokemons: [],
    singlePokemon: {}
}

export const PokemonContextProvider = ({ children }) => {

    const reducer = (state, action) => {
        switch (action.type) {
            case "SET_POKEMON_DATA":
                return {
                    ...state,
                    pokemons: action.payload
                }
                break;

            default:
                return state
                break;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const getPokemonData = async (url) => {

        try {
            const res = await axios.get(url)
            const pokemonData = await Promise.all(

                res.data.results.map(async (pokemon) => {
                    const pokemonDetail = await axios.get(pokemon.url);


                    return {
                        name: pokemon.name,
                        url: pokemon.url,
                        details: pokemonDetail.data
                    }
                })
            )
            dispatch({ type: "SET_POKEMON_DATA", payload: pokemonData })

        } catch (error) {

        }

    }

    const getPokemonModel = async (url) => {
        try {
            const response = await axios.get(url)
// console.log(response);
            const pokemonModel= response.data.stats
            console.log(pokemonModel);

        } catch (error) {
console.log(error);
        }

    }

    useEffect(() => {
        getPokemonData(API)
    }, [])

    return <PokemonContext.Provider value={{ ...state, getPokemonModel }}>
        {children}
    </PokemonContext.Provider>
}