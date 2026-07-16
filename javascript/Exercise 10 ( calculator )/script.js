console.log("This is my first calculator made by using javacript !");

//Simple calculator.

let a = 10;
let b = 20;

console.log(a, "+", b, "=", a + b);
console.log(a, "-", b, "=", a - b);
console.log(a, "*", b, "=", a * b);
console.log(a, "/", b, "=", a / b);

//calculator using the arrow function.

const calculator = (x, y) => {
    console.log("addition = ",x + y);
    console.log("Subtraction = ",x - y);
    console.log("Multiplicaiton = ",x * y);
    console.log("Division = ",x / y);
}

calculator(3246, 20);