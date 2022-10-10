const asyncHandler = require("express-async-handler");
const Comment  =require("../models/commentModel");

const PostComment = asyncHandler(async(req,res)=>{
    const {name, idea, opinion} = req.body;

    const NewComment = await Comment.create({name, idea, opinion})
    if(NewComment){
        res.status(200).json({
            _id: NewComment._id,
            name: NewComment.name,
            idea : NewComment.idea,
            opinion: NewComment.opinion
        })
    }
    else{
        res.status(400);
        throw new Error("đã có lỗi khi tạo comment")
    }
});

const GetComment = asyncHandler(async(req, res)=>{
    const comment = await Comment.find({});
    res.json(comment)
})

module.exports = {
    PostComment,
    GetComment
}