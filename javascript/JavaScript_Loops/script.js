console.log("Loops in JavaScript");

// For loop.

let a = 10; 

for (let i = 1; i <= 10; i++) {
        console.log("1 to 10:", i);
}

let obj = {
        name: "sarthak",
        "roll no": 123,
        company: "XYZ pvt ltd"
}

for (const key in obj) {
        console.log(key, ":", obj[key]);
}

for (const value of "sarthak") {
        console.log(value);
}

// while loop.

let b = 1;

while (b < 10) {
        console.log("while loop:", b);
        b++;
}

// do while loop.

let c = 1;
do {
        console.log("do while loop : ",c);
        c++;
}
while (c < 10); 



