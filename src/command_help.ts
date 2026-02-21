import { CLICommand } from "./command.js"

export function commandHelp(commands: Record<string, CLICommand>) {
    console.log("\nUsage:\n")
    for (const [key, value] of Object.entries(commands)) {
        console.log(`${key}: ${value.description}`);
    }
    console.log();
}
