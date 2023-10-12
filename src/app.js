export class Main {
    fizzByzz(number) {
        if(this.isMultipleOfThreeAndFive(number)) return "fizzbuzz";
        if(this.isMultipleOfThree(number)) return "fizz";
        if(this.isMultipleOfFive(number)) return "buzz";

        return number;
    }

    isMultipleOfThreeAndFive(number) {
        return this.isMultipleOfFive(number) && this.isMultipleOfThree(number);
    }

    isMultipleOfFive(number) {
        return number % 5 === 0;
    }

    isMultipleOfThree(number) {
        return number % 3 === 0;
    }
}
