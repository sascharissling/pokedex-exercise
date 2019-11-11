/**
 * json-pokemon is a package which is installed with `npm i json-pokemon`.
 * See https://www.npmjs.com/package/json-pokemon
 *
 * You will find details about the properties of a pokemon.
 *
 * There are some helper functions which makes this task easier, but please try to implement your own filter and search logic.
 */
import pokemons from 'json-pokemon';
import { type } from 'os';

// BY NAME
export function getPokemonsByName(pokemonName) {
  const foundPokemons = pokemons.filter(({ name }) =>
    name.toLowerCase().match(pokemonName.toLowerCase())
  );
  return foundPokemons;
}

// // BY ID

// export function getPokemonsById(pokemonId) {
//   const foundPokemons = pokemons.filter(({ id }) =>
//     id.toLowerCase().match(pokemonId.toLowerCase())
//   );
//   return foundPokemons;
// }

// // BY TYPE

// export function getPokemonsByType(pokemonType) {
//   const foundPokemons = pokemons.filter(({ typeList }) =>
//     typeList.toLowerCase().match(pokemonType.toLowerCase())
//   );
//   return foundPokemons;
// }
