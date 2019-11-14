import 'babel-polyfill';

import {
  createPokemonElements,
  resetInput,
  removeChilds
} from './api/elements';

import {
  getPokemonsByName,
  getAllPokemons,
  sortPokemonsByName,
  initPokemons
} from './api/pokemons';

initPokemons().then(start);

function start() {
  // Query elements
  const searchInput = document.querySelector('.search__input');
  const resultsElement = document.querySelector('.results');
  const pokeSort = document.querySelector('.search__selector');

  const allPokemons = getAllPokemons();
  const allSortedPokemons = sortPokemonsByName(allPokemons);
  // Reset input and results
  resetInput(searchInput);
  createPokemonElements(allSortedPokemons, resultsElement);

  // Search By Name
  searchInput.addEventListener('input', handleSearch);

  // Sort function
  pokeSort.addEventListener('change', handleSearch);

  function handleSearch() {
    const sortDirection = pokeSort.value;
    const searchValue = searchInput.value;
    const pokemons = getPokemonsByName(searchValue);
    const sortedPokemons = sortPokemonsByName(pokemons, sortDirection);

    removeChilds(resultsElement);
    createPokemonElements(sortedPokemons, resultsElement);
  }
}
