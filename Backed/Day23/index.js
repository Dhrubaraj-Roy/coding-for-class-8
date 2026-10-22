const express = require("express")
const app  = express();
const main =  require("./database")
const User = require("./Models/user");
const cookieParser = require("cookie-parser");
const userAuth = require("./middleware/userAuth");
const authUser = require("./routes/authUser");
const allUsers = require("./routes/getUsers");
const dltUser = require("./routes/deleteUser");


app.use(express.json());
app.use(cookieParser());

//CURD : Create Read Update Delete 
app.use('/auth',authUser);
app.use('/user',allUsers);
app.use('/user', dltUser);



main()
.then( async ()=>{
    console.log("connect to DB");
    await User.createIndexes();
    app.listen(process.env.PORT,()=>{
    console.log(`Listening at port ${process.env.PORT}`);
    })
})
.catch((err)=>console.log(err));
