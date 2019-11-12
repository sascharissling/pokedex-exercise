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

// Search By Name

searchInput.addEventListener('input', event => {
  const searchValue = event.target.value;
  const pokemons = getPokemonsByName(searchValue);
  removeChilds(resultsElement);
  createPokemonElements(pokemons, resultsElement);

  //setChild(resultsElement, pokemonElements);
});

/**
 * Later, you can add sort functionality.
 */
