const express = require('express');
const authUser = express.Router();
const bcrypt = require("bcrypt")
const User = require("../Models/user");
const vuser = require("../utils/validate");

authUser.post("/login", async(req,res)=>{
    try{
        // const people = await User.findById(req.body._id);
        const people = await User.findOne({emailId:req.body.emailId});
        //{expiresIn: 10}
        const token = people.getJWT();
        
        if(!people)
            throw new Error("Invalid Credentials");
        const IsAllowed = people.verifyPassword(req.body.password);
        if(!IsAllowed)
            throw new Error("Invalid Credentials");

        res.cookie("token",token);
        res.send("Login Successfull");
        
    }
    catch(err){
        res.status(500).send(err.message);
    }
})


authUser.post("/register",async (req,res)=>{
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

authUser.post('/logout', async(req,res)=>{
    try{
        res.cookie("token",null,{expires: new Date(Date.now())});
        res.send("Logout Sucessfully");
    }
    catch(err){
        res.status(500).send(err.message);
    }
})


module.exports = authUser;