import { describe, expect, test } from "vitest";
import { cleanInput } from "./repl";

describe.each([
    {
        input: "  ",
        expected: [],
    },
    {
        input: "  hello  ",
        expected: ["hello"],
    },
    {
        input: "  hello  world  ",
        expected: ["hello", "world"],
    },
    {
        input: "Charmander Bulbasaur PIKACHU",
        expected: ["charmander", "bulbasaur", "pikachu"],
    },
    {
        input: "\t\tPreceding TaBs and LeAdInG CaRrIaGe returns.\n\n",
        expected: ["preceding", "tabs", "and", "leading", "carriage", "returns."],
    }
])("cleanInput($input)", ({ input, expected }) => {
    test(`Expected: ${expected}`, () => {
        const actual = cleanInput(input);

        // The `expect` and `toHaveLength` functions are from vitest
        // they will fail the test if the condition is not met
        expect(actual).toHaveLength(expected.length);
        for (const i in expected) {
            // likewise, the `toBe` function will fail the test if the values are not equal
            expect(actual[i]).toBe(expected[i]);
        }
    });
});
