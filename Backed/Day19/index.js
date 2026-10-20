const express = require("express")
const bcrypt = require("bcrypt")
const app  = express();
const main =  require("./database")
const User = require("./Models/user");
const vuser = require("./utils/validate");


app.use(express.json());

//CURD : Create Read Update Delete 


app.get("/user",async (req,res)=>{
    const ans = await User.find({});
    res.send(ans);
})


app.get("/user/:id",async (req,res)=>{
    const ans = await User.findById(req.params.id);
    res.send(ans);
})

app.post("/register",async (req,res)=>{
    try{
        vuser(req.body);
        req.body.password = await bcrypt.hash(req.body.password, 10);
        await User.create(req.body);
        res.send("Created Sucessfully");
        

    }
    catch(err){
        if (err.code === 11000) {
            return res.status(400).send("Email ID already exists!");
        }
        res.status(500).send(err.message);
    }
    
})

app.post("/login", async(req,res)=>{
    try{
        const people = await User.findById(req.body._id);
        if(!(req.body.emailId === people.emailId))
            throw new Error("Invalid Credentials");
        const IsAllowed = await bcrypt.compare(req.body.password, people.password);
        if(!IsAllowed)
            throw new Error("Invalid Credentials");

        res.send("Login Successfull");
        
    }
    catch(err){
        res.status(500).send(err.message);
    }
})

app.delete("/user/:id",async (req,res)=>{
    try{
        await User.deleteOne({name:req.params.id});
        res.send("Deleted Sucessfully");
    }
    catch(err){
        res.status(500).send(err);
    }
    
})
app.delete("/user/name/:name",async (req,res)=>{
    try{
        await User.deleteMany({name:req.params.name});
        res.send("Deleted Sucessfully");
    }
    catch(err){
        res.status(500).send(err);
    }
    
})

// app.put("/info", async(req,res)=>{
//     try{
//         await User.updateOne({name:"Dhruba"}, {age:23, city:"Gokulnagar"});
//         res.send("Updated Sucessfully");
//     }
//     catch(err){
//         res.status(500).send(err);
//     }
    
// })

main()
.then( async ()=>{
    console.log("connect to DB");
    await User.createIndexes();
    app.listen(3000,()=>{
    console.log("Listening at port 3000");
    })
})
.catch((err)=>console.log(err));
