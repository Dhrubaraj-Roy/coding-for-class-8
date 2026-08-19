// const red = document.getElementById("red")
// const blue = document.getElementById("blue")
// const green = document.getElementById("green")

// const body = document.body;

// red.addEventListener("click",function(){
//     body.style.backgroundColor = "red"
// })
// blue.addEventListener("click",function(){
//     body.style.backgroundColor = "blue"
// })
// green.addEventListener("click",function(){
//     body.style.backgroundColor = "green"
// })



// using less code

// const btn = document.querySelectorAll("button");
// const body = document.body;

// btn.forEach((btn) =>{
//     btn.addEventListener("click",()=>{
//         body.style.backgroundColor = btn.id;
//     })
// })



//optimized code

const root = document.getElementById('root');
const body = document.body;

root.addEventListener("click", (event)=>{
    if(event.target.className=='btn'){
        body.style.backgroundColor = event.target.id
        // console.log(event.target.className)
    }
})
