let boxes = document.getElementsByClassName("box");
console.log(boxes);
boxes[2].style.backgroundColor = "green"; //index wise;

let id = document.getElementById("box"); // id declared box get colored.
id.style.backgroundColor = "orange";

document.querySelector(".box").style.backgroundColor = "red"; // selects the first element in the class.

// document.querySelectorAll(".box").forEach(e => {
//     e.style.backgroundColor = "gray";
// });  

//this is use to change the all elements by using the loop for the consition query selector all

document.getElementsByTagName("div"); // all divs inside the code
