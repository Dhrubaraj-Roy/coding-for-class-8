// Set

//set contain qunie value 
const set = new Set([10,20,30,40, 10]);
// console.log(typeof set);

set.add(100);
set.add("Dhruba");

set.delete(100)


// console.log(set.size);

const arr3 = [10,10,10,20,34];

const set2 = new Set(arr3);
// console.log(set2);

const uarr = [...set2]

// console.log(uarr);
const set_a = [1,1,2,3,4,3,4];
const set_b = new Set([2,3,5,6,7,5,7]);




// const set3 = new Set(
// [...set_a, ...set_b]);

//intersection
const set3 = [...set_a].filter((num)=>set_b.has(num));
// console.log(set3); 

// for(let value of set_a)
//     console.log(value);

set_a.forEach((num)=>console.log(num))




