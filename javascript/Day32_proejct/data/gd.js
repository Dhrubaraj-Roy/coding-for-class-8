const resturent = []

const img = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

const res_name = ["The Olive Garden", "The Spice House", "Urban Tadka", "The Food Factory", "Royal Kitchen", "Taste of India", "The Green Leaf", "Flame & Grill", "The Hungry Fork", "Café Mocha", "The Curry House", "Food Junction", "The Golden Plate", "Street Bites", "The Terrace", "Spice Route", "The Dining Room", "Urban Eats", "The Food Hub", "Royal Treat"];

const food_type = ["Italian", "Chinese", "Indian", "Mexican", "Thai", "Japanese", "Korean", "French", "Spanish", "Greek", "Middle Eastern", "American", "British", "German", "Russian", "Turkish", "Brazilian", "Canadian", "Australian", "Vietnamese"];

const location = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose", "Austin", "Jacksonville", "Fort Worth", "Columbus", "Charlotte", "San Francisco", "Indianapolis", "Seattle", "Denver", "Washington"];

const offers = ["10% off", "20% off", "30% off", "40% off", "50% off", "60% off", "70% off", "80% off", "90% off", "100% off", "No offers", "Buy 1 Get 1 Free"];

const alchol_serves = ["Yes", "No"];

const open_time = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM"];

const close_time = ["9:00 PM", "10:00 PM", "11:00 PM", "12:00 AM", "1:00 AM", "2:00 AM", "3:00 AM", "4:00 AM", "5:00 AM", "6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM"];

for(let i=0; i<100; i++){

    const obj = {}
    obj["image"]= img[Math.floor(Math.random()*10)];
    obj["restaurant_name"] = res_name[Math.floor(Math.random()*10)];
    obj["rating"] = Math.floor(Math.random()*5+1);
    obj["food_type"] = food_type[Math.floor(Math.random()*20)];
    obj["price_for_two"] = Math.floor(Math.random()*1000+1);
    obj["location"] = location[Math.floor(Math.random()*20)];
    obj["distance_from_customer_house"] = Math.floor(Math.random()*10+1);
    obj["offers"] = offers[Math.floor(Math.random()*12)];
    obj["alchol_serves"] = alchol_serves[Math.floor(Math.random()*2)];
    obj["open_time"] = open_time[Math.floor(Math.random()*14)];
    obj["close_time"] = close_time[Math.floor(Math.random()*14)];

    resturent.push(obj);

}

// fs.writeFileSync(
//   "foods.json",
//   JSON.stringify(foods, null, 2)
// );

// console.log("foods.json created!");

const fs = require("fs");
fs.writeFileSync(
    "res_data.json",
    JSON.stringify(resturent, null, 2)
);

console.log("res_data.json created!");