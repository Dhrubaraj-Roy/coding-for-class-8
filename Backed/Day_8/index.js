const express = require("express");
const app = express();


app.use("/books", (req,res, next)=>{
    console.log(`time- ${Date.now()} method- ${req.method} url- ${req.url}`)
    next();
})


app.get("/books", (req,res)=>{
    console.log("Get request");
    res.send("info");
})

app.post("/books", (req,res)=>{
    console.log("Post request");
    res.send("info");
})

app.put("/books", (req,res)=>{
    console.log("Put request");
    res.send("info");
})

app.delete("/books", (req,res)=>{
    console.log("Delete request");
    res.send("info");
})

app.listen(4000, ()=>{
    console.log("Listening at port 4000");
})

