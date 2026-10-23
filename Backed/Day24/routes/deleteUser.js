const express = require('express');
const dltUser = express.Router();
const User = require("../Models/user");
const userAuth = require("../middleware/userAuth");


dltUser.delete("/:id",userAuth, async (req,res)=>{
    try{
        await User.deleteOne({_id:req.params.id});
        res.send("Deleted Sucessfully");
    }
    catch(err){
        res.status(500).send(err);
    }
    
})
dltUser.delete("/name/:name", userAuth,async (req,res)=>{
    try{
        await User.deleteMany({name:req.params.name});
        res.send("Deleted Sucessfully");
    }
    catch(err){
        res.status(500).send(err);
    }
    
})

module.exports = dltUser;