const redisClient = require('../config/redis');

const rateLimiter = async (req,res,next)=>{

    try{

        const ip = req.ip;

        const number_of_request = await redisClient.incr(ip);

        if(number_of_request > 10){
            throw new Error("User Limit Exceeded");
        }

        if(number_of_request == 1){
            await redisClient.expire(ip, 3600);
        }


        next();
    }
    catch(err){
        console.log(err);
        res.send("Internal Server Error "+ err);
    }
}

module.exports = rateLimiter;