import React from 'react';
import ReactDOM from 'react-dom/client';


// const header1 = React.createElement('h1', {id: 'main-header', className: 'header',style:{fontSize: '50px', backgroundColor: 'red', color: 'white'}}, 'Cavemen University is back');


// const div = React.createElement('div',{}, header1);
//it is react 17 version
// ReactDOM.render(header1, document.getElementById('root'));

//here is the 18th version of react


const name = "Tyrus";
const obj ={
    name: "Dhruba",
    age: 20,
    city: "New York"
}

const obj1 = {
    backgroundColor: "blue",
    fontSize: "50px",
    color: "white",
    fontstyle: "italic",
    
}

function greet(name){
    return "Hello " + name;
}

function greet1(obj){
    return "Hello " + obj.name;
}

const meet = greet1(obj);


const div  = (
    <>
        <h1 id="main-header" className="header" style={obj1}>
            {meet} here, I am {obj.age} years old and I live in {obj.city}
        </h1>
    </>
);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(div);
