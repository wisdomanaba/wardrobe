const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const stylistpostSchema = new mongoose.Schema({
    dress_title:{
        type:String,
        required:true
    },
    dress_size:{
        type:String,
        required:true
    },
    dress_color:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true
    },
    likes:[{type:ObjectId,ref:"User"}],
    comments:[{
        text:String,
        postedBy:{type:ObjectId,ref:"User"}
    }],
    postedBy:{
       type:ObjectId,
       ref:"User"
    }
},{timestamps:true})

mongoose.model("Stylistpost",stylistpostSchema)