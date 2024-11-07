import { Main } from '../src/app.js';

describe("FizzBuzz function should return the answer for the game", function() {
    const main = new Main();

    it("FizzBuzz should return 1 when given 1", function() {
        const result = main.fizzByzz(1);
        
        expect(result).toBe("1");
    });

    it('FizzBuzz should return 2 when given 2', function() {
        const result = main.fizzByzz(2);
        
        expect(result).toBe("2");
    });

    it("FizzBuzz should return Fizz when given 3", function() {
        const result = main.fizzByzz(3);
        
        expect(result).toBe("Fizz");
    });
    
    it('FizzBuzz should return 4 when given 4', function() {
        const result = main.fizzByzz(4);
        
        expect(result).toBe("4");
    });

    it("FizzBuzz should return Buzz when given 5", function() {
        const result  = main.fizzByzz(5);

        expect(result).toBe("Buzz");
    });

    it("FizzBuzz should return Fizz when given 6", function() {
        const result = main.fizzByzz(6);
        
        expect(result).toBe("Fizz");
    });

    it("FizzBuzz should return Fizz when given 9", function() {
        const result = main.fizzByzz(9);
        
        expect(result).toBe("Fizz");
    });
});


