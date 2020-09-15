const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin  = require('../middleware/requireLogin')
const Stylistpost =  mongoose.model("Stylistpost")
const User = mongoose.model("User")

router.get('/stylist/:id',requireLogin,(req,res)=>{

    User.findOne({
        _id:req.params.id,
        role: "stylist"
    })
    .select("-password")
    .then(stylist=>{
        if(stylist.role !== "stylist"){
            return res.status(422).json({error:"Not a stylist..."})
        }
        Stylistpost.find({postedBy:req.params.id})
         .populate("postedBy","_id username")
         .exec((err,posts)=>{
             if(err){
                 return res.status(422).json({error:err})
             }
             res.json({stylist,posts})
         })
    }).catch(err=>{
        return res.status(404).json({error:"Stylist not found"})
    })
})


router.put('/follow',requireLogin,(req,res)=>{
    User.findByIdAndUpdate(req.body.followId,{
        $push:{followers:req.user._id}
    },{
        new:true
    },(err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }
      User.findByIdAndUpdate(req.user._id,{
          $push:{following:req.body.followId}
          
      },{new:true}).select("-password").then(result=>{
          res.json(result)
      }).catch(err=>{
          return res.status(422).json({error:err})
      })

    }
    )
})
router.put('/unfollow',requireLogin,(req,res)=>{
    User.findByIdAndUpdate(req.body.unfollowId,{
        $pull:{followers:req.user._id}
    },{
        new:true
    },(err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }
      User.findByIdAndUpdate(req.user._id,{
          $pull:{following:req.body.unfollowId}
          
      },{new:true}).select("-password").then(result=>{
          res.json(result)
      }).catch(err=>{
          return res.status(422).json({error:err})
      })

    }
    )
})


router.put('/updatepic',requireLogin,(req,res)=>{
    User.findByIdAndUpdate(req.user._id,{$set:{pic:req.body.pic}},{new:true},
        (err,result)=>{
         if(err){
             return res.status(422).json({error:"pic canot post"})
         }
         res.json(result)
    })
})



router.post('/search-users',(req,res)=>{
    let userPattern = new RegExp("^"+req.body.query)
    User.find({username:{$regex:userPattern}})
    .select("_id username")
    .then(user=>{
        res.json({user})
    }).catch(err=>{
        console.log(err)
    })

})



module.exports = router