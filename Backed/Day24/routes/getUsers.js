
const express = require('express');
const allUsers = express.Router();
const userAuth = require("../middleware/userAuth");
const User = require("../Models/user");



allUsers.get("/allusers",async (req,res)=>{
    const ans = await User.find({});
    res.send(ans);
})


allUsers.get("/user",userAuth,async (req,res)=>{
    // const ans = await User.findById(req.params.id);
    // res.send(ans);

    try{
        res.send(req.result);
    }
    catch(err){
        res.send("Error :: "+ err.message);
    }
})

module.exports = allUsers;