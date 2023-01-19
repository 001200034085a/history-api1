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
});

const DeleteComment = asyncHandler(async(req,res)=>{
    const comment  = await Comment.findById(req.params.id);
    if(comment){
       await comment.remove();
       res.json({message:"xóa thành công"})
    }
    else{
        res.status(400);
        throw new Error("xóa thất bại")
    }
});

const PutComment = asyncHandler(async(req,res)=>{
    const comment = await Comment.findById(req.params.id);

    if(comment){
        comment.name = req.body.name || comment.name;
        comment.idea = req.body.idea || comment.idea;
        comment.opinion = req.body.opinion || comment.opinion;

        const updateComment = await comment.save();
        _id = updateComment._id;
        name = updateComment.name;
        idea = updateComment.idea;
        opinion = updateComment.opinion;

        res.json(updateComment)
    }
    else{
        res.status(401);
        throw new Error("lỗi khi sửa")
    }

    
})

module.exports = {
    PostComment,
    GetComment, 
    DeleteComment, 
    PutComment
}