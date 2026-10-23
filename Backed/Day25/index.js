const express = require("express")
const app  = express();
const main =  require("./database")
const User = require("./Models/user");
const cookieParser = require("cookie-parser");
const userAuth = require("./middleware/userAuth");
const authUser = require("./routes/authUser");
const allUsers = require("./routes/getUsers");
const dltUser = require("./routes/deleteUser");
const redisClient = require("./config/redis");
const rateLimiter = require("./middleware/rateLimiter");


app.use(express.json());
app.use(cookieParser());

app.use(rateLimiter);

//CURD : Create Read Update Delete 
app.use('/auth',authUser);
app.use('/user',allUsers);
app.use('/user', dltUser);

const InitlizeConnection = async ()=>{
    try{
        await Promise.all([main(),redisClient.connect()])
        console.log("DB connected");

        app.listen(process.env.PORT,()=>{
        console.log(`Listening at port ${process.env.PORT}`);
        })

    }
    catch(err){
        console.log("Error: "+err); 
    }
}

InitlizeConnection();
