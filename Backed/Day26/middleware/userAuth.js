const jwt  = require("jsonwebtoken");
const User = require("../Models/user");
const redisClient = require("../config/redis");

const userAuth = async (req,res,next)=>{
    try{
        const {token} = req.cookies;
        if(!token){
            throw new Error("Token doesn't exist");
        }
        
        const payload = jwt.verify(token, "secretkey");
        const {_id} = payload;

        if(!_id){
            throw new Error("Id doesn't exist");
        }


        const result = await User.findById(_id);
        
        if(!result){
            throw new Error("User doesn't exist");
        }

        const IsBlocked = await redisClient.exists(`token:${token}`);
        if(IsBlocked)
            throw new Error("Invalid Token");

        req.result = result;
        next();


    }
    catch(err){
        res.status(500).send(err.message);
    }
}

module.exports = userAuth;
    
