const questionBank = [
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "int", "string", "float"],
        answer: "var"
    },
    {
        question: "What does 'typeof null' return in JavaScript?",
        options: ["null", "undefined", "object", "number"],
        answer: "object"
    },
    {
        question: "Which method is used to convert a JSON string to a JavaScript object?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toObject()"],
        answer: "JSON.parse()"
    },
    {
        question: "What is the output of: console.log(2 + '2')?",
        options: ["4", "22", "NaN", "undefined"],
        answer: "22"
    },
    {
        question: "Which array method adds an element to the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        answer: "push()"
    },
    {
        question: "What does the '===' operator check in JavaScript?",
        options: ["Value only", "Type only", "Value and type both", "Reference only"],
        answer: "Value and type both"
    },
    {
        question: "Which built-in method is used to find the length of a string?",
        options: [".size()", ".length", ".count()", ".strlen()"],
        answer: ".length"
    },
    {
        question: "What will 'Boolean(0)' return?",
        options: ["true", "false", "0", "undefined"],
        answer: "false"
    },
    {
        question: "Which loop is best suited when the number of iterations is unknown?",
        options: ["for loop", "while loop", "do-while loop", "for-in loop"],
        answer: "while loop"
    },
    {
        question: "What does the 'isNaN()' function do?",
        options: ["Checks if a value is null", "Checks if a value is not a number", "Checks if a value is undefined", "Checks if a value is a string"],
        answer: "Checks if a value is not a number"
    },
    {
        question: "Which method removes the last element from an array?",
        options: ["shift()", "pop()", "splice()", "slice()"],
        answer: "pop()"
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        options: ['var arr = "1, 2, 3"', "var arr = (1, 2, 3)", "var arr = [1, 2, 3]", "var arr = {1, 2, 3}"],
        answer: "var arr = [1, 2, 3]"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        options: ["onchange", "onclick", "onmouseover", "onmousedown"],
        answer: "onclick"
    },
    {
        question: "How do you write a comment in JavaScript?",
        options: ["<!-- comment -->", "// comment", "** comment **", "# comment"],
        answer: "// comment"
    },
    {
        question: "What does 'DOM' stand for?",
        options: ["Document Object Model", "Data Object Model", "Document Order Method", "Digital Object Model"],
        answer: "Document Object Model"
    },
    {
        question: "Which method is used to select an element by its ID?",
        options: ["document.querySelector()", "document.getElementById()", "document.getElement()", "document.findById()"],
        answer: "document.getElementById()"
    },
    {
        question: "What is the default value of an uninitialized variable in JavaScript?",
        options: ["null", "0", "undefined", "NaN"],
        answer: "undefined"
    },
    {
        question: "Which keyword is used to define a constant in JavaScript?",
        options: ["var", "let", "const", "constant"],
        answer: "const"
    },
    {
        question: "What does the 'Math.floor()' method do?",
        options: ["Rounds up to the nearest integer", "Rounds down to the nearest integer", "Returns the absolute value", "Returns a random number"],
        answer: "Rounds down to the nearest integer"
    },
    {
        question: "Which method converts a JavaScript object to a JSON string?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.toString()", "JSON.convert()"],
        answer: "JSON.stringify()"
    }
];

// function randomQuestions(){


//     const data = new Set();
//     while(data.size != 5){
//         const index = Math.floor(Math.random()*questionBank.length);
//         data.add(questionBank[index]);
//     }

//     return Array.from(data);
// }

//v2 of randomQuestions function
function randomQuestions() {
    const shuffled = [...questionBank].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 5);
}



const form = document.getElementById("quizeForm");
const problem = randomQuestions();
const original_ans = {};


problem.forEach((obj, index)=>{
    const div = document.createElement('div');
    div.className = 'question';
    original_ans[`q${index+1}`] = obj['answer']; 

    const p = document.createElement('p');
    p.textContent = `${index+1}. ${obj['question']}`;

    div.appendChild(p); 


    obj['options'].forEach((data)=>{

        const label = document.createElement('label');

        const input = document.createElement('input');
        input.type = "radio";
        input.name = `q${index+1}`;   
        input.value = data;

        label.appendChild(input);
        label.appendChild(document.createTextNode(data));
        div.appendChild(label);
        div.appendChild(document.createElement('br'));
    })

    form.appendChild(div);
    
})

const button = document.createElement("button");
button.type = 'submit';
button.className = 'submit-btn';
button.textContent = 'Submit';

form.appendChild(button);







form.addEventListener('submit', (e) => {
    let score = 0;
    const data = new FormData(form);
    e.preventDefault();

    for (let [key,value] of data.entries()) {
        if (value === original_ans[key]) {
            score++;
        }
    }
    const out = document.getElementById('out');
    out.innerText = `${score} out of ${problem.length} is correct`;
 
 
    form.reset();

})

