console.log("I am learning the conditonal statement today");

let age = 20;
let grace = 2;

console.log(age + grace);
console.log(age - grace);
console.log(age * grace);
console.log(age / grace);
console.log(age % grace);
console.log(age ** grace);

if ((age - grace) > 18) {
    console.log("You are eligible to vote");
}

else if ((age - grace) == 18) {
    console.log("You are just 18, go to home and sleep for a while");
}
else {
    console.log("You are not eligible to vote");
}

a = 6;
b = 7;
let c = a > b ? (a - b) : (b - a);

/* this translate to this
if (a > b) {
    c = a - b;
} else {
    c = b - a;
}
*/

console.log(c);