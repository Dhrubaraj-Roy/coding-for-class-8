// function fetchUserData(callback){

//     console.log("data is fetching .....")

//     setTimeout(()=>{

//         const obj = {
//             name:'DHruba',
//             age:25,
//             sex:"male"
//         }
//         console.log("data has been fetched")

//         callback(obj);
//     },2000)

// }

// function greet(obj){
//     console.log("hi", obj.name)
// }

// function meet(obj){
//     console.log("hey ", obj.name, "we will met at 7pm")
// }

// fetchUserData(greet);


// function order(callback){
//     console.log('talking with dominos.....');
//     setTimeout(() => {

//         console.log("order placed");
//         callback(diliver);
        
//     }, 2000);
// }

// function ready(callback){
//     console.log('pizza is making.....');
//     setTimeout(() => {

//         console.log("pizza is ready");
//         callback(diliver);
        
//     }, 2000);
// }

// function diliver(){
//     console.log('pizza is dilivering.....');
//     setTimeout(() => {

//         console.log("pizza dilivered");
        
//     }, 2000);

// }

// order(()=>{
//     ready(()=>{
//         diliver();
//     });
// });


// console.log("10");

// setTimeout(() => {
//     console.log("20");
// }, 2000);


// console.log('30');


console.log("10");

const timer = Date.now();
while(Date.now() - timer < 2000){
    
}
console.log('20')




console.log('30');

