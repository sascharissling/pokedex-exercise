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
  getAllPokemons,
  sortPokemonsByName
} from './api/pokemons';

// Query elements
const searchInput = document.querySelector('.search__input');
const resultsElement = document.querySelector('.results');
const pokeSort = document.querySelector('[data-sort]');
const sortAscending = document.querySelector('[data-sort-asc]');
const sortDescending = document.querySelector('[data-sort-desc]');
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

const sortablePokemons = resultsElement.firstChild.innerHTML;

// Sort function
sortAscending.addEventListener('click', sortPokemonsByName(sortablePokemons));

sortDescending.addEventListener(
  'click',
  sortPokemonsByName(sortablePokemons, (sortDirection = 'DESC'))
);
