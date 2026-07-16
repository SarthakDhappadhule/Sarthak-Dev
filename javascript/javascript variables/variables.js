console.log("Hello, World!");

let a = 10;  //let is block scoped variable (Block variable)
let b = 20;
var c = "Sarthak"; //var is the function scoped variable (Global variable)

console.log("the value of the a + b is :", a + b);
console.log(typeof a, typeof b, typeof c);

let x = "Sarthak";
let y = 10;
let z = 3.55;
let p = true;
let q = null;
let r = undefined;

console.log(x, y, z, p, q, r);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);

let o = {
    name: "Sarthak",
    age: 20,
    isStudent: true,
    "is handsome": true
}
console.log(o);
o.salary = 50000;
console.log(o);

let arr = [1, 2, 3, 4, 5];
console.log(arr);
