const mongoose = require("mongoose")
const { union } = require("zod")
const { required } = require("zod/mini")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:[true,"username already taken"],
        required:true,
    },
    email:{
        type:String,
        unique:[true,"account already exist with this email address"],
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
})


const userModel = mongoose.model("users",userSchema)

module.exports=userModel