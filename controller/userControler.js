const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");
const bcrypt = require("bcryptjs");

const registerUser = asyncHandler(async(req,res)=>{
    const {name, email, password} = req.body;
    //1. check user đã tồn tại trong database hay chưa
    const Exist = await User.findOne({email});
    if(Exist){
        res.status(400);
        throw new Error("đã có user trong hệ thống")
    }
    // 2.save to database
    const newUser = await User.create({name, email, password});
    if(newUser){
        res.status(200).json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            password: newUser.password,
            isAdmin: newUser.isAdmin,
            token: generateToken(newUser._id)
        })
    }
    else{
        res.status(400);
        throw new Error("đã có lỗi khi tạo user")
    }
});


const loginUser = asyncHandler(async(req,res)=>{
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(user && await bcrypt.compare(password, user.password)){
        res.json({
            _id: user.user,
            name: user.name, 
            email : user.email,
            password: user.password,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        });
    }
    else{
        res.status(401);
        throw new Error("không đúng mật khẩu hoặc password")
    }
});

const getUserProfile = asyncHandler(async(req, res)=>{
    const user = await User.findById(req.user._id);
    if(user){
        res.json({
            _id : user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    }
    else{
        res.status(401);
        throw new Error("User not found")
    }
});

const getAllUser = asyncHandler(async(req,res)=>{
    const user = await User.find({});
    res.json(user)
});

const updateUserProfile = asyncHandler(async(req,res)=>{
    const user = await User.findById(req.user._id);
    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        if (req.body.password) {
            // Tại sao không phải hash password ở đây.
            user.password = req.body.password;
        }

        const updateUser = await user.save();
        res.json({
            _id: updateUser._id,
            name: updateUser.name,
            email: updateUser.email,
            isAdmin: updateUser.isAdmin
        });
    } else {
        res.status(401);
        throw new Error('User not found');
    }
});


const deleteUserById = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
        await user.remove();
        res.json({
            message: 'User removed'
        });
    } else {
        res.status(400);
        throw new Error('User not found');
    }
 });
 
 const getUserById = asyncHandler(async(req,res)=>{
    const getUserById = await User.findById(req.params.id);
    if(getUserById){
     res.status(200).json({
         name:getUserById.name,
         email:getUserById.email,
         password:getUserById.password,
         isAdmin:getUserById.isAdmin
     })
    }
 });
 
 const putUserById = asyncHandler(async(req,res)=>{
     const user = await User.findById(req.params.id);
     if (user) {
         user.name = req.body.name || user.name;
         user.email = req.body.email || user.email;
         if (req.body.password) {
             // Tại sao không phải hash password ở đây.
             user.password = req.body.password;
         }
 
         const updateUser = await user.save();
         _id = updateUser.id,
         name = updateUser.name,
         email = updateUser.email,
         password =updateUser.password,
         isAdmin = updateUser.isAdmin
 
         res.json(updateUser);
     } else {
         res.status(401);
         throw new Error('User not found');
     }
 });

module.exports = {
    registerUser, loginUser, getUserProfile, getAllUser, updateUserProfile, deleteUserById, getUserById, putUserById
}