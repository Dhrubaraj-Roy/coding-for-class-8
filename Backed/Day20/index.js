const express = require("express")
const bcrypt = require("bcrypt")
const app  = express();
const main =  require("./database")
const User = require("./Models/user");
const vuser = require("./utils/validate");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");


app.use(express.json());
app.use(cookieParser());

//CURD : Create Read Update Delete 


app.get("/info",async (req,res)=>{
    const ans = await User.find({});
    res.send(ans);
})


app.get("/user",async (req,res)=>{
    // const ans = await User.findById(req.params.id);
    // res.send(ans);

    try{
        const payload = jwt.verify(req.cookies.token, "secretkey");
        // console.log("This is the payload " + payload.emailId);
        const result = await User.findById(payload._id);
        res.send(result);
    }
    catch(err){
        res.send("Error "+ err.message);
    }
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
        // const people = await User.findById(req.body._id);
        const people = await User.findOne({emailId:req.body.emailId});
        const token = jwt.sign({_id:people._id,emailId:people.emailId}, "secretkey", {expiresIn: 10});
        if(!people)
            throw new Error("Invalid Credentials");
        const IsAllowed = await bcrypt.compare(req.body.password, people.password);
        if(!IsAllowed)
            throw new Error("Invalid Credentials");

        res.cookie("token",token);
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
