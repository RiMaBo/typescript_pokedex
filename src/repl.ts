import { State } from "./state.js"

export function cleanInput(input: string): string[] {
    return input.toLowerCase().trim().split(" ").filter((word) => word !== "");
}

export async function startREPL(state: State) {
    console.log("Welcome to the Pokedex!");
    state.readline.prompt();
    state.readline.on("line", async (input) => {
        const words = cleanInput(input);
        if (words.length) {
            const commandName = words[0];
            const command = state.commands[commandName];

            if (command) {
                try {
                    await command.callback(state);
                } catch (err) {
                    console.log((err as Error).message);
                }
            } else {
                console.log(`Unknown command: "${commandName}". Type "help" or a list of commands.`);
            }
        }
        state.readline.prompt();
    });
}
