


//read the data from input 
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");


//show the result 
const result = document.getElementById('result');

const addBtn = document.getElementById("add-btn");
const subBtn = document.getElementById("sub-btn");
const mulBtn = document.getElementById("mul-btn");




function add(){
    result.innerText = Number(num1.value)+Number(num2.value);
}
function mul(){
    result.innerText = Number(num1.value)*Number(num2.value);
}
function sub(){
    result.innerText = Number(num1.value)-Number(num2.value);
}

addBtn.addEventListener("click", add)
subBtn.addEventListener("click", sub)
mulBtn.addEventListener("click", mul)


//it will not work properly because we are not able to differenciate the operation type
// document.addEventListener("keypress", function (e){
//     if(e.key =="Enter"){
//         calculate();
//     }

// })



