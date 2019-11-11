import {
  createNoPokemons,
  createPokemons,
  setChild,
  resetInput,
  removeChilds
} from './api/elements';

import {
  getPokemonsByName,
  getPokemonsByType,
  getPokemonsById
} from './api/pokemons';

// Query elements
const searchInput = document.querySelector('.search__input');
const resultsElement = document.querySelector('.results');
const sortByName = document.querySelector('[data-name-sort]');
const sortByNumber = document.querySelector('[data-id-sort]');

// Reset input and results
resetInput(searchInput);
setChild(resultsElement, createNoPokemons());

// Add event listeners

let pokeNameSearch = '';
let pokeTypeSearch = '';
let pokeNumberSearch = '';

// Search By Name

searchInput.addEventListener('change', function() {
  removeChilds(resultsElement);
  pokeTypeSearch = [];
  pokeNumberSearch = [];
  pokeNameSearch = getPokemonsByName(searchInput.value);
  pokeNameSearch.forEach(createPokemons);
});

// // Search By ID
// searchInput.addEventListener('change', function() {
//   removeChilds(resultsElement);
//   pokeTypeSearch = [];
//   pokeNameSearch = [];
//   pokeNumberSearch = getPokemonsById(searchInput.value);
//   pokeNumberSearch.forEach(createPokemons);
// });

// // Search By Type
// searchInput.addEventListener('change', function() {
//   removeChilds(resultsElement);
//   pokeNumberSearch = [];
//   pokeNameSearch = [];
//   pokeTypeSearch = getPokemonsByType(searchInput.value);
//   pokeTypeSearch.forEach(createPokemons);
// });

/**
 * Later, you can add sort functionality.
 */
