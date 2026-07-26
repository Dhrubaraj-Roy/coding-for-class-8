// const age = 20

// if(age>18){
//     console.log("voter")
// } else if(age<5) {
//     console.log("chaild")
// } else{
//     console.log("not a voter")
// }


// let sum = 0;

// for (i=0;i<=10;i++){
//     sum += i
// }

// console.log(sum)


// for (let i=1; i<=5; i++){
//     for(let j=1; j<=5; j++){
//         console.log(j)
//     }
// }

// if(true){
//     var a = 12;
//     const b = 34;
//     let c = 56;

// }


// const func2 = () =>{
//     var a = 12;
//     if(true){
//         var b = 34;
//         let c = 45;
    
//     }
//     console.log(b)
// }


// console.log(a);

// console.log(b)
// func2()
// console.log(b)
// console.log(c)



// let newvar = 20;
// if(true){
//     let newvar = 50;
//     console.log(newvar)
// }

// console.log(newvar)


// let i = 1;
// while(i<6){
//     console.log(i)
//     i++;
// }
// sum of an array 
// const arr1 = [1,3,6,7];
// let sum = 0;

// for (i=0; i<arr1.length; i++){
//     sum += arr1[i];
// }

// console.log(sum)


const obj = {
    name:"Dhruba",
    age : 25,
    class : 10
}

// const key = Object.keys(obj);

// for (let i=0; i<key.length; i++){
//     console.log(obj[key[i]])
// }

for (keys in obj){
    console.log(keys + ":" + obj[keys])
}


