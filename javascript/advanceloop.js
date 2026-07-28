// let obj = {
//     name:"dhruba",
//     age:25,
//     class:10
// }

// let obj2 = {
//     ...obj,
//     vill:"gokulnagar",
//     post:"Promodnagar"
// }

// console.log(obj2);
// console.log(obj2.name);

let obj = {
    name:"DHruba",
    bac_no:2332423,
    age:25,

}


Object.defineProperty(obj, "bac_no", {    
   enumerable:false
})


// console.log(obj.name);
// obj.bac_no = 4545454;
// console.log(obj.bac_no);

// for (let i in obj){
//     console.log(i);
// }

console.log(Object.getOwnPropertyDescriptor(Object.prototype,"toString"))