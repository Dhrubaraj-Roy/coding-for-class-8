// global object 

// console.log("Hello world");

// console.log(window.document)

// console.log(this.document)

// document.getElementById("first").innerHTML = "You are working with DOM ok ";

// function attach(content){
//     const element = document.createElement("li");
//     element.textContent = content;

//     const list = document.getElementById("third");
//     list.appendChild(element);

// }

// attach("Git and GitHub");
// attach("React");
// attach("Backend");


const UL = document.querySelector('ul');
UL.setAttribute("class", "Dhruba");
UL.removeAttribute("class", "Dhruba");

console.log(UL.getAttribute("class"));
