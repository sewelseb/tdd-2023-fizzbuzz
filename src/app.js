export class Main {
    fizzByzz(number) {
        if (this.isMultipleOf3(number) && this.isMultipleOf5(number)) return "FizzBuzz";
        if (this.isMultipleOf3(number)) return "Fizz";
        if(this.isMultipleOf5(number)) return "Buzz";
        
        return number.toString();
    }

    isMultipleOf5(number) {
        return number % 5 === 0;
    }

    isMultipleOf3(number) {
        return number % 3 === 0;
    }
}
