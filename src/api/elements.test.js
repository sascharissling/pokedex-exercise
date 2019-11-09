import { createNoPokemons } from './elements';

/**
 * Feel free to add missing tests (or even better -> start writing the test before you implement the functionality)
 */

test('creates `no pokemons found` element', () => {
  const noPokemonsElement = createNoPokemons();
  expect(noPokemonsElement.outerHTML).toBe(
    '<div class="results__empty">No Pokemons found</div>'
  );
});
