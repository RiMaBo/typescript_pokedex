import type { State } from "./state.js";

export async function commandHelp(state: State) {
    console.log("\nUsage:\n")
    for (const [key, value] of Object.entries(state.commands)) {
        console.log(`${key}: ${value.description}`);
    }
    console.log();
}
