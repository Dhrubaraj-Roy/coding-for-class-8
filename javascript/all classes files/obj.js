const obj = {
    id : 3232,
    name: "Dhruba",
    acc_no: 2334332,
    age: 25,
    sex: "Male"
}

// console.log(obj);

obj.name = "Roy"
// console.log(obj["name"])

// console.log(Object.keys(obj).length)

// const arr = [35,6,85,24];

// const [a,b,...f] = arr;
// console.log(a,b,f)

// console.log(typeof f)

let obj4 = {
    name:"Dhruba",
    age:25,
    arr:[12,45,67,23],

}
let obj5={
    acc:12131
}

obj5.__proto__ = obj4

// const {arr:[one]} = obj4;
// console.log(one)
console.log(obj5.name)
console.log(obj5.acc)
