console.log("Hello, World !");

let cont = document.body.childNodes[1];


cont.lastElementChild;
cont.lastElementChild.style.backgroundColor = "red";


let firstChild = cont.children[0]; 
firstChild.style.backgroundColor = "green";

let secondChild = cont.children[1]; 
secondChild.style.backgroundColor = "blue";

let thirdChild = cont.children[2]; 
thirdChild.style.backgroundColor = "purple";

let forthChild = cont.children[3]; 
forthChild.style.backgroundColor = "yellow";