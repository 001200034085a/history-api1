const mongoose = require("mongoose");


const commentSchema = mongoose.Schema({
    name:{
        require:true,
        type:String
    },
    idea:{
        require:true,
        type:String
    },
    opinion:{
        require:true,
        type:String
    }
});

const Comment = mongoose.model("comment", commentSchema);

module.exports = Comment;