import type { State } from "./state.js";

export async function commandInspect(state: State, ...args: string[]) {
    if (!args.length) {
        throw new Error("Please specify a Pokemon to inspect");
    }

    const pokemonName = args[0];
    if (!state.pokedex[pokemonName]) {
        throw new Error("You have not caught that pokemon");
    }

    console.log(`Name: ${state.pokedex[pokemonName].name}`);
    console.log(`Height: ${state.pokedex[pokemonName].height}`);
    console.log(`Weight: ${state.pokedex[pokemonName].weight}`);

    console.log("Stats:");
    for (const stats of state.pokedex[pokemonName].stats) {
        console.log(`  -${stats.stat.name}: ${stats.base_stat}`);
    }

    console.log("Types:");
    for (const types of state.pokedex[pokemonName].types) {
        console.log(`  - ${types.type.name}`);
    }
}
