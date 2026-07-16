console.log("This is the String tutorial using the JavaScript");

let a = "Sarthak";
console.log(a);

//single character of string :
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]);

//length of string :
console.log(a.length);

let name = "Sarthak";
let friend = "Shivraj";

//string concatenation :
// console.log(name + " is a friend of " + friend);

let sentence = `${name} is a friend of ${friend}`;
console.log(sentence);

// string methods : 
let b = "Sarthak";
let c = "   Sarthak   Is   God   ";
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.slice(1, 4));
console.log(b.replace("Sarthak", "Shivraj"));
console.log(b.replace("Sar", "Shiv")); // we can also add the numbers to replace the characters in the string
console.log(b.length);
console.log(b.concat(" is a good boy"));
console.log(c.trim()); // it will remove the spaces from the string.
console.log(c.trimStart()); // it will remove the spaces from the start of the string.
console.log(c.trimEnd()); // it will remove the spaces from the end of the string.
console.log(b.indexOf("Sarthak")); // it will return the index of the first element in the string.
console.log(b.lastIndexOf("Sarthak")); // it will return the index of the last element in the string.
