alert("This is a faulty calculator. It will give you the wrong answer 10% of the time. Please use it at your own risk.");

let random = Math.random();
let a = prompt("Enter the first number");
let b = prompt("Enter the second number");
let c = prompt("Enter the operator");

let finalopt = c;

// If the consition gets true then this block will execute and the operator will be changed to the opposite operator.

if (random < 0.1) {
    if (c === "+") finalopt = "-";
    else if (c === "-") finalopt = "+";
    else if (c === "*") finalopt = "/";
    else if (c === "/") finalopt = "*";
}

// Otherwise this block will execute and the operator will remain the same.

let result;

if (finalopt === "+") {
    result = a + b;
} else if (finalopt === "-") {
    result = a - b;
} else if (finalopt === "*") {
    result = a * b;
} else if (finalopt === "/") {
    result = a / b;
} else {
    result = "Invalid Operator";
}

// 3. Output the result

alert(`The result is ${result}`);