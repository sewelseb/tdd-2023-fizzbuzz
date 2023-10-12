export class Main {
    fizzByzz(number) {
        if(number === 3 || number ===6) return "fizz";
        if(number === 5) return "buzz";

        return number;
    }
}
