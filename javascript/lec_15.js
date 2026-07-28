"use strict";
// let arr = [10,20,"Dhruba", 30,40];

// for (let value of arr)
// {
//     console.log(value)

// }

// let str = "Dhruba is";

// for (value of str)
// {
//     console.log(value)
// }

//don't use for of loop in object  directly 

let obj = {
    name: "Dhruba",
    age: 25,
    vill: "gokulnagar"
}

// console.log(Object.values(obj));
// for (let value of Object.values(obj)){
//     console.log(value);
// }

// for (let k of Object.keys(obj)){
//     console.log(k);
// }

let arr = [10,20,"Dhruba", 30,40, 43,67,44,56,41,23];

// arr.forEach(function(num){
//     console.log(num);
// });

// arr.forEach((num)=>{console.log(num);});


//filter

// arr.filter((num)=>{
//     if(num%2==0){
//     console.log(num)
// }   
// })

//real use case 
// const evenarr = arr.filter((num)=>{
//     return num%2==0;
// })

//more simple 
const evenarr = arr.filter((num)=>num%2==0)
// console.log(evenarr)
 

const arr2 = [1,2,3,4]
const result = arr2.map((num)=> num*num)
console.log(result)



