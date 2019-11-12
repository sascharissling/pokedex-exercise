export function createNoPokemons() {
  const element = document.createElement('div');
  element.className = 'results__empty';
  const content = document.createTextNode('No Pokemons found');
  element.appendChild(content);
  return element;
}

export function createPokemonElements(pokemons, resultsElement) {
  /**
   * This function could receive an array of pokemons and creates epaElements for each of them.
   * You can use createPokemon to create a single element.
   */
  pokemons.forEach(pokemon => {
    const pokemonElement = createPokemon(pokemon);
    resultsElement.appendChild(pokemonElement);
  });
}

export function createPokemon(pokemons) {
  const pokeCard = document.createElement('div');
  const pokeName = document.createElement('h3');
  const pokeNumber = document.createElement('h4');
  const pokeType = document.createElement('p');

  pokeCard.className = 'results__card';

  appendChild(pokeCard, pokeName);
  appendChild(pokeCard, pokeNumber);
  appendChild(pokeCard, pokeType);

  pokeName.innerHTML = pokemons.name;
  pokeNumber.innerHTML = pokemons.id;
  pokeType.innerHTML = pokemons.typeList;

  return pokeCard;
}

// export function createPokemon(pokemon) {
//   /**
//    * This function could create a new element and displays the properties of a pokemon.
//    */
// }

export function removeChilds(parent) {
  parent.innerHTML = '';
}

export function appendChild(parent, child) {
  parent.appendChild(child);
}

export function setChild(parent, child) {
  removeChilds(parent);
  appendChild(parent, child);
}

export function resetInput(input) {
  input.value = '';
}
