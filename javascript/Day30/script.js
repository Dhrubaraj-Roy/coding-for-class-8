// const obj = fetch("http://api.weatherapi.com/v1/current.json?key=b075886c79da4bb0ba254338262508&q=London&aqi=no");

// V1
// obj.then((data)=>{
//     const pro2 = data.json();

//     pro2.then((body)=>{
//         console.log(pro2);
//     })
    
// }).catch((error)=>{
//     console.log(error)
// })



//V2
// const pro2 = obj.then((data)=>{
//     return data.json();    
// })

// pro2.then((body)=>{
//     console.log(body);
// })



//V3
// obj.then((data)=>{
//     return data.json();    
// }).then((body)=>{
//     console.log(body);
// })


// V4
// obj
// .then(data=>data.json())
// .then(body=>console.log(body))


//V5
fetch("http://api.weatherapi.com/v1/current.json?key=b075886c79da4bb0ba254338262508&q=London&aqi=no")
.then(data=>data.json())
.then(body=>console.log(body))
.catch(error=>console.log("Error has occured"))
