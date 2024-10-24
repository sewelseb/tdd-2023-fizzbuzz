import { Main } from '../src/app.js';

describe("FizzBuzz function should return the answer for the game", function() {
    
    it("FizzBuzz should return 1 when given 1", function() {
        let main = new Main();

        let result = main.fizzByzz(1);
        
        expect(result).toBe("1");
    });

    it('FizzBuzz should return 2 when given 2', function() {
        let main = new Main();
        
        let result = main.fizzByzz(2);
        
        expect(result).toBe("2");
    });
    
});

