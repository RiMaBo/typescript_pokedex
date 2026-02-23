import type { State } from "./state.js";
import { PokeAPI } from "./pokeapi.js"

export async function commandExplore(state: State, ...args: string[]) {
    if (!args.length) {
        throw new Error("Please provide a location name");
    }

    const locationName = args[0];
    console.log(`Exploring ${locationName}...`);
    const locationDetails = await state.pokeAPI.fetchLocation(locationName);

    console.log("Found Pokemon:");
    for (const encounters of locationDetails.pokemon_encounters) {
        console.log(` - ${encounters.pokemon.name}`);
    }
}
