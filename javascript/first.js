console.log("hello world!!!");


//declate the variable 

let num = 10;
console.log(num);

//Undefined 
let a;
console.log(a);

//Null
let b = null;
console.log(b)

//bigint 
let c = 1234567890123456789012345678901234567890;
console.log(c);


let d = 1234567890123456789012345678901234567890n ;
console.log(d);



//non primitive data type 
//Array, Object, Function


//object
let arr = [12,34,66, "Dhruba", "ram"];
console.log(arr);
console.log(typeof arr);


//object 
//key:value

let obj = {
  name: "Dhruba",
  age: 18,
  city: "Kathmandu",
  cof: "Dhananjay Roy"
};
console.log(obj);
console.log(typeof obj);

//function
let fun = function(){
    console.log("Hello word")
}

fun();
console.log(typeof fun) // function 


//Type conversion 
console.log("Type conversion ------------------")

let acc_b = "1000";
console.log(typeof acc_b);

let num_acc = Number(acc_b);
console.log(num_acc);
console.log(typeof num_acc);    

//boolen convert to number

let x = true
console.log(Number(x));


let random = "100ere"

console.log(Number(random)) //NaN - the full form of NaN is Not a Number 

//Null
let random2 = null
console.log(Number(random2))

//Undefined 
let random3 = undefined
console.log(Number(random3))


//Arithmetic Operators

console.log("Arithmetic Operators  --------")

console.log(10 + 20)
console.log(10 - 20)
console.log(10 * 20)
console.log(10 / 20)
console.log(10 % 20)

//1st - Divide and multiply left to right
//2nd - Add and subtract left to right

console.log(22/4+34*2-44);


