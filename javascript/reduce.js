// Reduce 
const arr = [10,20, 30, 40];


// const result = arr.reduce((acc, curr)=> {
//     acc = acc+curr;
//     return acc
// }, 0);

const result = arr.reduce((acc, curr)=> acc+curr, 0);

// console.log(result)

// more read worl cases 

const arr2 = ["orange", "blue", "black", "red", "red", "blue", "blue", "black"];

// const result2 = arr2.reduce((acc, curr) =>{
//     if(acc.hasOwnProperty(curr))
//         acc[curr]++
//     else
//         acc[curr] = 1

//     return acc;
// }, {})

//more clean code 
const result2 = arr2.reduce((acc, curr) =>{
    acc.hasOwnProperty(curr) ? acc[curr]++ : acc[curr] = 1;
    return acc;
}, {})

console.log(result2)

const obj = {
    class:10,
}

const curr = "class";

// console.log(obj.hasOwnProperty(curr))

