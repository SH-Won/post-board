const express = require('express');
const router = express.Router();
const { Comment } = require("../models/Comment");


router.post('/saveComment',(req,res)=>{
    const comment = new Comment(req.body)
    comment.save((err,comments)=>{
        if(err) res.json({success:false,err})
        Comment.find({_id:comments._id})
        .populate('writer')
        .exec((err,comment)=>{
            if(err) res.json({success:false,err})
            res.json({success:true,comment})
        })
    })
})
router.post('/getComments',(req,res)=>{
    Comment.find({productId:req.body.productId})
    .populate('writer')
    .exec((err,comments)=>{
        if(err) res.json({success:false,err})
        res.json({success:true,comments})
    })
})
router.post('/deleteComment',(req,res)=>{
    Comment.findOneAndUpdate({productId:req.body.productId,_id:req.body.commentId}
        ,{$set:{content:'삭제된 댓글 입니다'}})
    .exec((err,result)=>{
        if(err) return res.json({success:false,err})
        Comment.find({productId:req.body.productId})
        .populate('writer')
        .exec((err,comments)=>{
            if(err) return res.json({success:false,err})
            res.json({success:true,comments})
        })
    })

})



module.exports = router;
