//function 1.

function changename(name) {
    console.log("Hey " + name + " is number 1");
    console.log("Hey " + name + " is number 2");
    console.log("Hey " + name + " is number 3");
    console.log("Hey " + name + " is number 4");
}

changename("Sarthak");
changename("Shivraj");

//funciton 2.
function add(a, b) {
    console.log("Sum is: ", a + b);
}

add(10, 60);

//function 3.

function add1(a, b, c = 10) {
    return a + b + c;
}

let sumresult = add1(60, 10);
console.log("addition a b c : ", sumresult);

//function 4.

function subtract(a, b) {
    return a - b;
}

let sub = subtract(60, 10);
console.log("subtraction is: ", sub);

const func1 = (x) => {
    console.log("Arrow function is: ", x);
}

func1("Sarthak");
func1(89.77 );
func1(25211830466);