let user = {
    name:"Dhruba",
    age : 25,
    id: 12345,
    vill:"Gokulnagar",
}

Object.defineProperties(user, {
    "name": {
        writable: false,

    },})

user.name = "John"; // This will not change the name property because it is not writable
// console.log(user.name); // Output: "Dhruba"


// for (let key in user) {
//     console.log( user [key]);
// }


//filter
let arr = [1,2,3,4,5,6,7,8,9,10];

const result = arr.filter((num) => num % 2 === 0);
// console.log(result); // Output: [2, 4, 6, 8, 10]


//map 
let arr1 = [1,2,3,4,5,6,7,8,9,10];

// const result1 = arr1.map((n)=> n*n);
// console.log(result1); // Output: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

