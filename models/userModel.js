const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
    name:{
        type:String, 
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    isAdmin:{
        type:Boolean,
        require:true,
        default:true
    }
    

});

userSchema.pre('save',async function (next){
//    mã hóa password trước khi lưu vào user database
    if(!this.isModified('password')){
        return next();
    } 
    try{
       const salt = await bcrypt.genSalt(10);
       this.password = await bcrypt.hash(this.password, salt);
       return next();
    }
    catch(err){
        return next(err);
    }
})

const User = mongoose.model('User',userSchema);

module.exports = User;