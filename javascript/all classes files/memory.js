let arr = [23,43,56,"dhruba"];

let arr2 = arr;
arr2[0] = 100;

console.log(arr);
console.log(arr2);


// it is a primitive datatype and it is gonna store on stack memory 
let a = 12;
let b = 54;
let c = a;
c = 34;
console.log(a);
console.log(b);
console.log(c);


// it is a non primitive datatype and the value is gonna store on heap memory 
// only address of that vlaue will store on stack memory 

let obj1 = {
    id : 23423,
    name : "Dhruba"
}

let obj2 = obj1;
obj2.id = 112;

console.log(obj1.id);
console.log(obj2.id);

