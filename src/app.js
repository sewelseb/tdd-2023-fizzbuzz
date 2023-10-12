export class Main {
    fizzByzz(number) {
        if(this.isMultipleOfThree(number)) return "fizz";
        if(number%5 === 0) return "buzz";

        return number;
    }

    isMultipleOfThree(number) {
        return number % 3 === 0;
    }
}
