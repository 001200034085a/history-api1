const express = require("express");
const { PostComment, GetComment } = require("../controller/commentController");
const router = express.Router("");

router.post("/", PostComment);

router.get("/", GetComment)

module.exports = router;