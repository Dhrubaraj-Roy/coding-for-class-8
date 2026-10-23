const mongoose = require("mongoose");
const { Schema } = mongoose;
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");


const userSchema = new Schema({
    // name:String,
    // age:Number,
    // city:String,
    // gender:String
    //password

    name:{
        type:String,
        required: true,
        
    },
    age:{
        type:Number,
        min: 14,
        max: 80,
    },
    gender:{
        type:String,
        validate(value){
            if(!["male","female","others"].includes(value))
                throw new Error("Invalid Gender")
        }
        
    },
    emailId:{
        type:String,
        required: true,
        trim: true,
        lowercase:true,
        unique: true,
        
    },
    photo:{
        type:String,
        default: "This is the default photo"
    },
    password:{
        type:String,
        required: true,
        trim: true
    }
    

}, {timeseries:true})

userSchema.methods.getJWT = function(){
    return jwt.sign({_id:this._id,emailId:this.emailId}, process.env.SECRET_KEY, {expiresIn: "1d"});
}

userSchema.methods.verifyPassword = async function(Userpassword){
    return await bcrypt.compare(Userpassword, this.password);
}



const User = mongoose.model("user",userSchema);

module.exports = User;
    
    

    

