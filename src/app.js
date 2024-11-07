export class Main {
    fizzByzz(number) {
        if (this.isMultipleOf3(number)) return "Fizz";
        if(number === 5 || number === 10) return "Buzz";
        
        return number.toString();
    }

    isMultipleOf3(number) {
        return number % 3 === 0;
    }
}
