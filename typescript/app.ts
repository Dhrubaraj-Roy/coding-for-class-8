let a:number = 10;
let b:number = 20;

//string 
let str:string = "Hello World";

//boolen
let isTrue:boolean = true;

let names:string = "Dhruba";
let age:number = 24;


let vill:any;
vill = "gokulnagar";
vill = 12;

let val:unknown;
val = 12;
val = "hello";

//array
let arr:number[] = [1,2,3,4,5];

let arr2:(string|number|boolean)[] = [1,2,3,4,5,"hello","world", true,false];


//tuple
// let arr3:[string,number,boolean] = ["hello", 12, 14]; so it will gives me error
let arr4:[string,number,boolean] = ["hello", 12, true]; //correct syntax


//object

//inline syntax
let obj:{name:string, age:number, gender:string} = {
    name:"Dhruba",
    age:24,
    gender:"male"
}

//way2
let person:{name:string, age:number, gender:string};

person = {name:"Shubha", age:24, gender:"male"};


//way3 for clean code
type Person = {
    name:string,
    age:number,
    gender:string
}

let person1:Person = {name:"Ram", age:24, gender:"male"};
console.log(person1.name);

 


interface admin {
    name:string,
    age:number,
    gender:string
}  

interface admin {   
    id:number
}

let person2:admin = {name:"Shyam", age:24,  id:1, gender:"male"};    
console.log(person2);