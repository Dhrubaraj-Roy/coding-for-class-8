const cart = ['Pizza', 'Coke', 'Sandwich'];



function placeOrder(cart){
    console.log('talking with dominos');
    const pr = new Promise(function(resolve, reject){
        setTimeout(() => {
            const food_available = true ;
            if(food_available){
                console.log('order placed successfully')
                const order = {order:123, food:cart, restaurant:'Dominos', location:'Dwarka'}
                resolve(order);
            }
            else{
                reject('items out of stock');
            }
        }, 2000);
    })
    return pr;
}
function preparingOrder(order){
    console.log('order preparation started')
    const pr = new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log('order prepared')
            const foodDetails = {token:12, restaurant:'Dominos', location:'Dwarka'}
            resolve(foodDetails);
        }, 2000);
    })
    return pr;
}
function pickupOrder(foodDetails){
    console.log('reaching order for picking order');
    const pr = new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log('order picked up by delivery boy')
            dropLocation = foodDetails.location;
            
        }, 2000);
    })
}
function deliverOrder(dropLocation){
    console.log('delivering order to your home');
    const pr = new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log('Order delivered successfully');
            resolve('Thank you for ordering');
        }, 2000);
    })
    return pr;
}
// V1
// placeOrder(cart)
// .then(order=>preparingOrder(order))
// .then(foodDetails=>pickupOrder(foodDetails))
// .then(dropLocation=>deliverOrder(dropLocation))
// .catch(error=>console.log(error))


// V2
async function ourOrder(cart) {

    try{
        const order = await placeOrder(cart);
        const foodDetails = await preparingOrder(order);
        const dropLocation = await pickupOrder(foodDetails);
        deliverOrder(dropLocation);
    }
    catch(error){
        console.log(error);
    }

    
}

ourOrder(cart)


// const p1 = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         resolve("First promise resolved");
//     }, 5000);
// })

// const p2 = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         resolve("Second promise resolved");
//     }, 2000);
// })


// async function order(){
//     const data1 = await p1;
//     console.log(data1);
//     const data2 = await p2;
//     console.log(data2);
// }

// order()

// p1.then(value=>console.log(value))
// p2.then(value=>console.log(value))


function test1(){
    const p1 = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve("First promise resolved");
    }, 5000);
    })
    return p1;
}


function test2(){
    const p2 = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve("Second promise resolved");
    }, 5000);
    })
    return p2;
}




async function order1(){
    const [data1, data2] = await Promise.all([test1(), test2()]);
    console.log(data1);
    console.log(data2);
}

// order1()