const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin  = require('../middleware/requireLogin')
const Stylistpost =  mongoose.model("Stylistpost")
const User = mongoose.model("User")

// router.get('/stylist/:id',requireLogin,(req,res)=>{

//     User.findOne({
//         _id:req.params.id,
//         role: "stylist"
//     })
//     .select("-password")
//     .then(stylist=>{
//         if(stylist.role !== "stylist"){
//             return res.status(422).json({error:"Not a stylist..."})
//         }
//         Stylistpost.find({postedBy:req.params.id})
//          .populate("postedBy","_id username")
//          .exec((err,posts)=>{
//              if(err){
//                  return res.status(422).json({error:err})
//              }
//              res.json({stylist,posts})
//          })
//     }).catch(err=>{
//         return res.status(404).json({error:"Stylist not found"})
//     })
// })

router.get('/stylist/allpost',requireLogin,(req,res)=>{
    Stylistpost.find()
    .populate("postedBy","_id username pic")
    .populate("comments.postedBy","_id username")
    .sort('-createdAt')
    .then((posts)=>{
        res.json({posts})
    }).catch(err=>{
        console.log(err)
    })
    
})

router.post('/stylist/createpost',requireLogin,(req,res)=>{

    if(req.user.role !== "stylist"){
        return res.status(422).json({error:"Not a stylist..."})
    }

    const {dress_title,dress_size,dress_color,body,gender,pic} = req.body

    req.user.password = undefined

    const stylistPost = new Stylistpost({
            dress_title,
            dress_size,
            dress_color,
            gender,
            body,
            photo:pic,
            postedBy:req.user
    })
    stylistPost.save().then(result=>{
            res.json({post:result})
    }).catch(err=>{
            console.log(err)
    })

    // User.findOne({_id:id}).then(stylist=>{
    //     if(stylist.role !== role){
    //         return res.status(422).json({error:"Not a stylist..."})
    //     }

    //     if(!dress_title || !dress_size || !dress_color || !gender || !body || !pic){
    //         return  res.status(422).json({error:"Plase add all the fields"})
    //     }

        
    //     console.log(req.user._id)
    // }).catch(err=>{
    //     return res.status(422).json({error:"Not a stylist..."})
    // })
})

router.get('/stylist/getsubpost',requireLogin,(req,res)=>{

    // if postedBy in following
    Stylistpost.find({postedBy:{$in:req.user.following}})
    .populate("postedBy","_id username")
    .populate("comments.postedBy","_id username")
    .sort('-createdAt')
    .then(posts=>{
        res.json({posts})
    })
    .catch(err=>{
        console.log(err)
    })
})

module.exports = router