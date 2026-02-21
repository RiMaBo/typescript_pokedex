import { createInterface } from "readline"
import { getCommands } from "./commands.js"

export function cleanInput(input: string): string[] {
    return input.toLowerCase().trim().split(" ").filter((word) => word !== "");
}

export function startREPL() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });
    console.log("Welcome to the Pokedex!");
    rl.prompt();
    rl.on("line", (input: string) => {
        const words = cleanInput(input);
        if (words.length) {
            const commandName = words[0];
            const commands = getCommands();
            const command = commands[commandName];

            if (command) {
                try {
                    command.callback(commands);
                } catch (err) {
                    console.log(err);
                }
            } else {
                console.log(`Unknown command: "${commandName}". Type "help" or a list of commands.`);
            }
        }
        rl.prompt();
    });
}
