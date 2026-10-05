const http = require("http");
const server = http.createServer((req, res)=>{
    // res.end("Hello I am Dhruba I am a good boy!!")
    if(req.url === "/"){
        res.end("Home page")
    }
    if(req.url === "/about"){
        res.end("About page")
    }
    if(req.url === "/contact"){
        res.end("Contact page")
    }
});


server.listen(4001, ()=>{
    console.log("hey i am listing........")
})
