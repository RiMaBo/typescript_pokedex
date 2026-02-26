import type { State } from "./state.js";
import { PokeAPI } from "./pokeapi.js"

export async function commandCatch(state: State, ...args: string[]) {
    if (!args.length) {
        throw new Error("Please specify a Pokemon to catch");
    }

    const pokemonName = args[0];
    console.log(`Throwing a Pokeball at ${pokemonName}...`);
    const pokemonDetails = await state.pokeAPI.catchPokemon(pokemonName);

    const base_experience = pokemonDetails.base_experience
    const caught = Math.min(Math.random() * base_experience, Math.random() * base_experience);
    if (caught > base_experience / 2) {
        console.log(`${pokemonName} was caught!`);
        state.pokedex[pokemonName] = pokemonDetails;
    }
    else {
        console.log(`${pokemonName} escaped!`);
    }
}
