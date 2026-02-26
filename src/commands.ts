import type { CLICommand } from "./state.js";
import { commandExit } from "./command_exit.js"
import { commandHelp } from "./command_help.js"
import { commandMapForward, commandMapBack } from "./command_map.js"
import { commandExplore } from "./command_explore.js"
import { commandCatch } from "./command_catch.js"
import { commandInspect } from "./command_inspect.js"
import { commandPokedex } from "./command_pokedex.js"

export function getCommands(): Record<string, CLICommand> {
    return {
        help: {
            name: "help",
            description: "Display a help message",
            callback: commandHelp,
        },
        map: {
            name: "map",
            description: "Display the names of the next page of location areas in the Pokemon world.",
            callback: commandMapForward,
        },
        mapb: {
            name: "mapb",
            description: "Display the names of the previous page of location areas in the Pokemon world.",
            callback: commandMapBack,
        },
        explore: {
            name: "explore <location name>",
            description: "Explore a location area in the Pokemon world.",
            callback: commandExplore,
        },
        catch: {
            name: "catch <pokemon name>",
            description: "Attempt to catch a pokemon.",
            callback: commandCatch,
        },
        inspect: {
            name: "inspect <pokemon name>",
            description: "Inspect a caught pokemon.",
            callback: commandInspect,
        },
        pokedex: {
            name: "pokedex",
            description: "List all caught pokemon.",
            callback: commandPokedex,
        },
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
    };
};
