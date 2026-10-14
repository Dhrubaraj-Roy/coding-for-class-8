const express = require("express")
const app  = express();
const main =  require("./database")
const User = require("./Models/user");

app.use(express.json());

//CURD : Create Read Update Delete 

app.get("/info",async (req,res)=>{
    const ans = await User.find({});
    res.send(ans);
})

app.post("/info",async (req,res)=>{
    try{
        await User.create(req.body);
        res.send("Created Sucessfully");
    }
    catch(err){
        res.status(500).send(err);
    }
    
})

app.delete("/info",async (req,res)=>{
    try{
        // await User.deleteOne({name:req.body.name});
        await User.deleteOne({name:"Tapas"});
        res.send("Deleted Sucessfully");
    }
    catch(err){
        res.status(500).send(err);
    }
    
})

app.put("/info", async(req,res)=>{
    try{
        await User.updateOne({name:"Dhruba"}, {age:23, city:"Gokulnagar"});
        res.send("Updated Sucessfully");
    }
    catch(err){
        res.status(500).send(err);
    }
    
})

main()
.then( async ()=>{
    console.log("connect to DB");
    app.listen(3000,()=>{
    console.log("Listening at port 3000");
    })
})
.catch((err)=>console.log(err));
