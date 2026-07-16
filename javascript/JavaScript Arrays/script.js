let arr = [1, 2, 3, 4, 5];

console.log("Array = ",arr,typeof arr);
console.log("Array Length = ",arr.length);
console.log("Element present at the index 0 is = ",arr[0]);

arr[0] = 566;
console.log("Updated array = ",arr);

console.log(arr.toString()); // converting array to string.
console.log(arr.join(" & ")); // adds the and in the every element.

let a = [1, 2, 3, 4, 5, 6];
a.pop(); // it removes the last element from the array
console.log(a);
a.push(100, "harry"); // add the elements in the array at the end
console.log(a, a.length);
a.shift();
console.log(a); // removes the first element in the array
a.unshift("jack");
console.log(a);
delete a[0];
console.log(a, a.length);

let a1 = [1, 2, 3, 4, 5];
let a2 = [6, 7, 8, 9, 10];
let a3 = [11, 12, 13, 14, 15];
let concatination = a1.concat(a2, a3);
console.log(concatination);

let number = [1, 2, 3, 4, 5];
number.splice(1, 2, 222, 333);// this removes the elements inn index 1 and 2 and add 222 and 333 there but it is optional.
console.log(number);
number.slice(2);

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

