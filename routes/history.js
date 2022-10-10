const express = require("express");
const {
     PostApi, getAllHistory, PutHistoryById, DeleteById
    } = require("../controller/historyController");
const { protect, isAdmin } = require("../midleware/authMidleware");
const router = express.Router();

// 1.post
router.post("/",  PostApi)
// 2.get all
router.get("/", getAllHistory)
// 3.put
router.put("/:id",  PutHistoryById);
// 4. delete
router.delete("/:id",  DeleteById);

module.exports = router;

// protect, isAdmin,