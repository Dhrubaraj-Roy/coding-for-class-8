 
const React = {
    createElement: function (tag, styles,children) {
        const element = document.createElement(tag);
        // write styles to the element
        //  console.log(element);


        if(typeof children === "object") {
            for(let val of children) {
                element.append(val);
            }
        }
        else 
        element.innerHTML = children;
           
        
        for(let key in styles) {
            element.style[key] = styles[key];
        }
        return element;
        
    }
}

const  header1 = React.createElement("h1", {fontSize: "50px", backgroundColor: "blue", color: "white"}, "Cavemen University is back");
document.getElementById("root").appendChild(header1);

const p = React.createElement("p", {fontSize: "20px", backgroundColor: "lightgray", color: "black"}, "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.");
document.getElementById("root").appendChild(p);

const li1 = React.createElement("li", {}, "HTML");
const li2 = React.createElement("li", {}, "CSS");
const li3 = React.createElement("li", {}, "JavaScript");

const ul = React.createElement("ul", {fontSize: "50px", backgroundColor: "blue", color: "white"}, [li1, li2, li3]);
document.getElementById("root").appendChild(ul);


//create eelemet using js
// const h1 = document.createElement("h1");
// h1.textContent = "Cavemen University";
// h1.style.backgroundColor = "blue";
// h1.style.fontSize = "50px";
// h1.style.color= "white";
// document.getElementById("root").appendChild(h1);


// const h2 = document.createElement("h2");
// h2.textContent = "Hello Guys!!";
// h2.style.backgroundColor = "black";
// h2.style.fontSize = "30px";
// h2.style.color= "white";
// document.getElementById("root").appendChild(h2);
