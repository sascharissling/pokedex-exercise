import {
  createNoPokemons,
  createPokemons,
  createPokemonElements,
  setChild,
  resetInput,
  removeChilds
} from './api/elements';

import {
  getPokemonsByName,
  getPokemonsByType,
  getPokemonsById,
  getAllPokemons
} from './api/pokemons';

// Query elements
const searchInput = document.querySelector('.search__input');
const resultsElement = document.querySelector('.results');

const allPokemons = getAllPokemons();

// Reset input and results
resetInput(searchInput);
createPokemonElements(allPokemons, resultsElement);

let pokeNameSearch = '';
let pokeNumberSearch = '';
let pokeTypeSearch = '';

// Search By Name

searchInput.addEventListener('input', event => {
  removeChilds(resultsElement);
  pokeNumberSearch = [];
  pokeTypeSearch = [];
  pokeNameSearch = getPokemonsByName(searchInput.value);
  pokeNameSearch.forEach(createPokemons);
});

// // Search By ID
// searchInput.addEventListener('input', event => {
//   removeChilds(resultsElement);
//   pokeNameSearch = [];
//   pokeTypeSearch = [];
//   pokeNumberSearch = getPokemonsById(searchInput.value);
//   pokeNumberSearch.forEach(createPokemons);
// });

// // BY TYPE

// searchInput.addEventListener('input', event =>) {
//   removeChilds(resultsElement);
//   pokeNumberSearch = [];
//   pokeNameSearch = [];
//   pokeTypeSearch = getPokemonsByType(searchInput.value);
//   pokeTypeSearch.forEach(createPokemons);
// });

/**
 * Later, you can add sort functionality.
 */
