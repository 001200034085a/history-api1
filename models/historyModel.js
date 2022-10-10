const mongoose = require("mongoose");

const historySchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        require:true
    },
    dob:{
        type:String,
        
    },
    pob:{
        type:String,
        
    },
    description:{
        type:String,
       
    },
    position:{
        type:String,
       
    },
    career:{
        type:String,
        
    },
    evaluate:{
        type:String,
        
    },
    prize:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    country:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    },
    period:{
        type:String
    },
    honnors:{
        type:String,
    },
    medal:{
        type:String,
    },
    url:{
        type:String,
    },
    imageVideo:{
        type:String,
    },
    likeVideo:{
        type:Number,
    },
    disLikeVideo:{
        type:Number,
    },
    like:{
        type:Number,
    },
    dislike:{
        type:Number,
    },
    star:{
        type:Number,
    },

});

module.exports = mongoose.model("History",historySchema);