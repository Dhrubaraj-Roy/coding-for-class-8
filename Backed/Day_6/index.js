const express = require("express")
const app = express()

app.get('/about/:username', (req, res) => {
    const {username} = req.params
    res.send(`About ${username}`)
})
app.get('/contact', (req, res)=>{
    res.send("this is contact page ")
})    

app.get("/", (req, res) => {
    res.send("Home page")
})

app.listen(4000, () => {
    console.log("Server started on port 4000")
})
