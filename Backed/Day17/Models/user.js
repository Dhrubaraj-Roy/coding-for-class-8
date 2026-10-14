const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    // name:String,
    // age:Number,
    // city:String,
    // gender:String

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
    }
    

}, {timeseries:true})

const User = mongoose.model("user",userSchema);

module.exports = User;
    
    

    

