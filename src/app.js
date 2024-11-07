export class Main {
    fizzByzz(number) {
        if (number === 3) return "Fizz";
        if(number === 5) return "Buzz";
        
        return number.toString();
    }
}
