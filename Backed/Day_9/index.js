const express = require("express");
const app = express();
app.use(express.json());
const {Auth} = require("./middleware/auth")

const FoodMenu = [
    {id:1, food:"Chowmein", category:"veg", price:500},
    {id:2, food:"Butter Naan", category:"veg", price:100},
    {id:3, food:"Chicken", category:"non-veg", price:1000},
    {id:4, food:"Mutton", category:"non-veg", price:1500},
    {id:5, food:"Momo", category:"veg", price:300},
    {id:6, food:"Chai", category:"veg", price:50},
    {id:7, food:"Rajma", category:"veg", price:300},
    {id:8, food:"Roti", category:"veg", price:20},
    {id:9, food:"Lolipop", category:"non-veg", price:700},
    {id:10, food:"Kebab", category:"non-veg", price:400},
    {id:11, food:"paneer", category:"veg", price:800},
    {id:12, food:"Egg Curry", category:"non-veg", price:300},
    {id:13, food:"salad", category:"veg", price:100},
    {id:14, food:"shourma", category:"veg", price:300},
    {id:15, food:"Butter Chicken", category:"non-veg", price:900},
    {id:16, food:"Mushroom", category:"veg", price:700},
]

const AddtoCart = [];



app.get('/food', (req, res)=>{
    res.status(200).send(FoodMenu);
})

app.post('/admin',Auth, (req, res)=>{
    try{
        FoodMenu.push(req.body);
        res.status(201).send("Item Added Succesfully");
    }
    catch(err){
        res.send(err);
    }
})

app.delete('/admin/:id',Auth, (req, res)=>{

    try{
        const id = parseInt(req.params.id);

        const index = FoodMenu.findIndex(item => item.id ===id);

        if(index===-1)
            res.send("Item Doesn't Exist");
        else{
            FoodMenu.splice(index,1);
            res.send("Succesfully Deleted");
        }
    }
    catch(err){
        res.send(err);
    }

})

app.patch('/admin',Auth, (req, res)=>{
    
    const id = req.body.id;

    const fooddata = FoodMenu.find(item=> item.id===id);

        if(fooddata){
            
            if(req.body.food)
                fooddata.food = req.body.food;
            if(req.body.category)
                fooddata.category = req.body.category;
            if(req.body.price)
                fooddata.price = req.body.price;

            res.send("Successfully Updated");
        }
        else{
            res.send("Item not exist")
        }


})


app.post("/user/:id", (req, res)=>{
    try{
        const id = parseInt(req.params.id);
        const foodIteam = FoodMenu.find(iteam=> iteam.id===id);
        if(foodIteam){
            AddtoCart.push(foodIteam);
            res.status(200).send("Iteam added sucessfully")
        }
        else{
            res.send("out of stoke");
        }
    }
    catch(err){
        res.send(err);
    }

})

app.delete("/user/:id", (req, res)=>{
    try{
        const id = parseInt(req.params.id);
        const dltIteam = AddtoCart.findIndex(iteam=>iteam.id===id);
        if(dltIteam!==-1){
            AddtoCart.splice(dltIteam,1);
            res.send("Iteam removed sucessfully");
        }
        else{
            res.send("Iteam is not present in cart");
        }
    }    
    catch(err){
        res.send("some error" + err)
    }
    
})

app.get("/user", (req, res)=>{
    if(AddtoCart.length===0){
        res.send("Cart is empty");
    }
    else{
        res.send(AddtoCart);
    }


})

app.listen(3000, ()=>{
    console.log("Listening at port 3000");
})