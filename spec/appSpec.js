import { Main } from '../src/app.js';

describe("A suite of test for the demo function of the main class", function() {
    it("fizzBuzz function return 1 when given 1", function() {
        let main = new Main();

        let result = main.fizzByzz(1);

        expect(result).toBe(1);
    });
});

