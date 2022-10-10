var express = require('express');
var router = express.Router();
const { 
  registerUser, loginUser , getUserProfile, getAllUser, updateUserProfile, deleteUserById, getUserById, putUserById,
} = require("../controller/userControler");
const { protect, isAdmin } = require('../midleware/authMidleware');

// 1.
// @decs: Register a new user
// @router :Post /api/users
// @access: public - return token
router.post("/", registerUser);

// 2.
// @decs: Login
// @router :Post /api/users/login
// @access: public - return token
router.post("/login",loginUser);

// 3.
// @decs: Get
// @router :get /api/users/profile
// @access: public - sử dụng token
router.get("/profile", protect, getUserProfile)

// 4.
// @decs: Get all
// @router :get /api/users
router.get("/", getAllUser);

// 5.
// @decs: update
// @router update /api/users
router.put("/profile", protect, updateUserProfile);

// 6.
// @desc: Delete user
// @route: DELETE /api/users/:id
// @access: Private/admin
router.delete('/:id', protect, isAdmin, deleteUserById);

// 7.
// @desc: get user
// @route: get /api/users/:id
// @access: Private/admin
router.get("/:id", protect, isAdmin, getUserById);

// 8.
// @desc: put user
// @route: put /api/users/:id
// @access: Private/admin
router.put("/:id",putUserById);

module.exports = router;
