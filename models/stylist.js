const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const stylistSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    resetToken:String,
    expireToken:Date,
    pic:{
     type:String,
     default:"https://res.cloudinary.com/devwian/image/upload/v1600188126/s0qhad82/User_account___Login_free_icon_1_ryse36.png"
    },
    followers:[{type:ObjectId,ref:"User"}],
    following:[{type:ObjectId,ref:"User"}],
})

mongoose.model("User",stylistSchema)