import axios from "axios";
import { createContext, useEffect, useReducer, useState } from "react";

export const PokemonContext = createContext()

const API = "https://pokeapi.co/api/v2/pokemon/"

const initialState = {
    pokemons: [],
    originalData: [],
    pokemonStats: [],
    pokemonId: null
}

export const PokemonContextProvider = ({ children }) => {

    const [searchInput, setSearchInput] = useState('')
    const [filter, setFilter] = useState('all type')
    const [page, setPage] = useState(1)

    const reducer = (state, action) => {
        switch (action.type) {
            case "SET_POKEMON_DATA":

                const uniquePokemons = action.payload.filter(newPokemon => {
                    // Check if the new Pokemon already exists in the state
                    return !state.pokemons.some(existingPokemon => existingPokemon.name === newPokemon.name);
                });
                return {
                    ...state,
                    pokemons: [...state.pokemons, ...uniquePokemons],
                    originalData: [...state.originalData, ...uniquePokemons]
                };
                break;
            case "POKEMON_STAT_MODEL":

                return {
                    ...state,
                    pokemonStats: action.payload
                }
                break;
            case "SEARCHED_POKEMON":

                if (action.payload === '') {
                    return {
                        ...state,
                        pokemons: state.originalData
                    }
                }

                const searchQuery = action.payload.toLowerCase()

                // console.log("searched pokemon is: ", action.payload);

                const searchedPokemon = state.originalData.filter((pokemon) => {

                    const isNameMatch = pokemon.name.includes(searchQuery)
                    const isIdMatch = pokemon.details && pokemon.details.id.toString() === searchQuery

                    return isNameMatch || isIdMatch;
                });

                // console.log("this is pokemons in state: ", state.pokemons);
                // console.log("pokemon after search is: ", searchedPokemon);
                const searchedPokemonId = searchedPokemon[0]?.details?.id;
                // console.log("searched pokemons id is : ", searchedPokemonId);
                return {
                    ...state,
                    pokemons: searchedPokemon,
                    pokemonId: searchedPokemonId
                };

            default:
                return state
                break;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)


    const getPokemonData = async (url) => {

        try {
            // const res = await axios.get(url)
            // const res = await axios.get(`${url}?page=${page}`)

            const limit = 20
            const offset = (page - 1) * limit;
            console.log('value of page is: ', page);
            console.log('value of offset is: ', offset);
            const res = await axios.get(`${url}?limit=${limit}&offset=${offset}&page=${page}`);
            // const res = await axios.get(`${url}?limit=${limit}&page=${page}`);
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
            console.log("Existing pokemons:", state.pokemons);
            console.log("Newly fetched data:", pokemonData);
            dispatch({ type: "SET_POKEMON_DATA", payload: pokemonData })

        } catch (error) {
            console.log(error);
        }

    }

    const getPokemonModel = async (url) => {
        try {
            const response = await axios.get(url)
            // console.log(response);
            const pokemonModel = response.data.stats

            // console.log(pokemonModel);

            dispatch({ type: "POKEMON_STAT_MODEL", payload: pokemonModel })

        } catch (error) {
            console.log(error);
        }

    }




    useEffect(() => {
        getPokemonData(API)
    }, [API, page])

    // console.log('filter is', filter);

    const onScroll = () => {
        const scrollTop = document.documentElement.scrollTop
        const scrollHeight = document.documentElement.scrollHeight
        const clientHeight = document.documentElement.clientHeight

        // console.log('scrollTop:', scrollTop);
        // console.log('scrollHeight:', scrollHeight);
        // console.log('clientHeight:', clientHeight);

        if (scrollTop + clientHeight + 1 >= scrollHeight) {
            setPage(prev => prev + 1)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [])


    const searchedPokemon = (searchedPokemonInput) => {
        dispatch({ type: "SEARCHED_POKEMON", payload: searchedPokemonInput })
    }


    return <PokemonContext.Provider value={{ ...state, getPokemonModel, searchInput, setSearchInput, searchedPokemon, filter, setFilter }}>
        {children}
    </PokemonContext.Provider>
}