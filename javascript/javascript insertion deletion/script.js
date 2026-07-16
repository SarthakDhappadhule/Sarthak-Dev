// document.querySelector(".container"); 
// document.querySelector(".box"); 
// document.querySelector(".box").innerHTML; 
// document.querySelector(".box").innerText; 
// document.querySelector(".box").outerHTML; 
// document.querySelector(".container").outerHTML; 
// document.querySelector(".box").tagName; 
// document.querySelector(".box").nodeName; 

// // Changes the content inside the box
// document.querySelector(".box").innerHTML = "hey i am sarthak"; 

// // FIX: Changed 'satAttribute' to 'setAttribute'
// document.querySelector(".box").setAttribute("style", "display: flex"); 

// // FIX: Removed the second argument from removeAttribute
// document.querySelector(".box").removeAttribute("style"); 

// // FIX: Changed 'designMod' to 'designMode'
// document.designMode = "on"; 

// // Creates and appends a new element
// let div = document.createElement("div"); 
// div.innerHTML = "This is the created div using the <b> javascript. </b>"; 
// div.setAttribute("class", "created"); 
// document.querySelector(".container").append(div);

// let div = document.createElement("div"); 
// div.innerHTML = "This is the created div using the <b> javascript. </b>"; 
// div.setAttribute("class", "created"); 

// document.querySelector(".container").before(div);

// let div = document.createElement("div"); 
// div.innerHTML = "This is the created div using the <b> javascript. </b>"; 
// div.setAttribute("class", "created"); 

// document.querySelector(".container").after(div);

// let div = document.createElement("div"); 
// div.innerHTML = "This is the created div using the <b> javascript. </b>"; 
// div.setAttribute("class", "created"); 

// document.querySelector(".container").replaceWith(div);

let cout = document.querySelector(".container");
cout.insertAdjacentHTML("afterbegin", "<b>hey i am under the water please help me hehe ! </b>");

//afterbegin : this attribute moves the element up or down.

document.querySelector(".container").classList.toggle("box");
//toggle is like a switch.