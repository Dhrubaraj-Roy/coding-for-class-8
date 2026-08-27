import resturent from './data/data.js';

function getResturent(resturent){

    const root = document.getElementById('root');

    resturent.forEach(resturent => {

        //create card 
        const card = document.createElement('div');
        card.classList.add('card');

        //create img 
        const img = document.createElement('img');
        img.src = `img/${resturent.image}.jpg`


        //card content 

        //card content 
        const card_content = document.createElement('div');
        card_content.classList.add('card_content');
        

        //card header
        const card_header = document.createElement('div');
        card_header.classList.add('card_header');

        //res name
        const h3 = document.createElement('h3');
        h3.innerText = resturent.restaurant_name;

        //rating
        const rating = document.createElement('span');
        rating.innerText = resturent.rating + " ⭐";
        rating.classList.add('rating');

        //append res name and rating into card header
        card_header.appendChild(h3);
        card_header.appendChild(rating);


        //card footer
        const card_footer = document.createElement('div');
        card_footer.classList.add('card_footer');

        //add food type and price 
        const food = document.createElement('span');
        food.innerText = resturent.food_type;

        const price = document.createElement('span');
        price.innerText = "₹"+resturent.price_for_two;

        //append food and price into card footer
        card_footer.appendChild(food);
        card_footer.appendChild(price);

        //card location 
        const card_location = document.createElement('div');
        card_location.classList.add('card_location');

        const location = document.createElement('span');
        location.innerText = resturent.location;

        const distance = document.createElement('span');
        distance.innerText = resturent.distance_from_customer_house+" km";

        //append location and distance into card location
        card_location.appendChild(location);
        card_location.appendChild(distance);


        //append card header, card footer, and card location into card content 

        card_content.appendChild(card_header);
        card_content.appendChild(card_footer);
        card_content.appendChild(card_location);

        //append cart content and image into card 

        card.appendChild(img);
        card.appendChild(card_content);

        root.appendChild(card);


        
    });


}


getResturent(resturent);

document.getElementById("alcohol").addEventListener('click', ()=>{
    const yes = resturent.filter((rest)=>rest.alchol_serves == "Yes");
    document.getElementById('root').innerHTML="";
    getResturent(yes);
})

document.getElementById("rating").addEventListener('click', ()=>{
    const rating = resturent.filter((rest)=>rest.rating >= 4);
    document.getElementById('root').innerHTML="";
    getResturent(rating);
}) 

document.getElementById("offer").addEventListener('click', ()=>{
    const offer = resturent.filter((rest)=>rest.offers != "No offers");
    document.getElementById('root').innerHTML="";
    getResturent(offer);
})

// Helper function to convert 12-hour time string ("4:00 PM", "10:00 AM") to minutes from midnight
function parseTimeToMinutes(timeStr) {
    const [time, modifier] = timeStr.trim().split(" ");
    let [hours, minutes] = time.split(":").map(Number);

    if (modifier === "PM" && hours !== 12) {
        hours += 12;
    }
    if (modifier === "AM" && hours === 12) {
        hours = 0;
    }

    return hours * 60 + minutes;
}

// Function to check if current time falls within restaurant open/close hours
function isOpenNow(openTime, closeTime) {
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    const start = parseTimeToMinutes(openTime);
    const end = parseTimeToMinutes(closeTime);

    if (start <= end) {
        // Same-day hours (e.g., 11:00 AM to 10:00 PM)
        return currentMinutes >= start && currentMinutes <= end;
    } else {
        // Overnight hours across midnight (e.g., 4:00 PM to 2:00 AM)
        return currentMinutes >= start || currentMinutes <= end;
    }
}

document.getElementById("open").addEventListener('click', () => {
    const open = resturent.filter((rest) => isOpenNow(rest.open_time, rest.close_time));
    document.getElementById('root').innerHTML = "";
    getResturent(open);
});


document.getElementById("filters").addEventListener('click', () => {
    document.getElementById('filterPopup').classList.remove('hidden');
})


document.getElementById("closeFilter").addEventListener('click', () => {
    document.getElementById('filterPopup').classList.add('hidden');
})  

document.getElementById("applyFilter").addEventListener('click', ()=>{
    const checked = document.querySelector('input[name="filterOption"]:checked').value;

    if(checked==='rating'){
        resturent.sort((a,b)=>b.rating - a.rating);
    }else if(checked==='highLow'){
        resturent.sort((a,b)=>b.price_for_two - a.price_for_two);
    }else if(checked==='costLowHigh'){
        resturent.sort((a,b)=>a.price_for_two - b.price_for_two);
    }else if(checked==='distance'){
        resturent.sort((a,b)=>a.distance_from_customer_house - b.distance_from_customer_house);
    }

    document.getElementById('root').innerHTML="";
    getResturent(resturent);
    document.getElementById('filterPopup').classList.add('hidden');
    
})