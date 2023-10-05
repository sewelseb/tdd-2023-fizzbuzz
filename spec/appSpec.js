import { Main } from '../src/app.js';

describe("A suite", function() {
    it("demo function should return 1", function() {
        let main = new Main();

        let result = main.demo();

        expect(result).toBe(1);
    });
});

