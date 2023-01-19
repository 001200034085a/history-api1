const express = require("express");
const { PostComment, GetComment, DeleteComment, PutComment } = require("../controller/commentController");
const router = express.Router("");

router.post("/", PostComment);

router.get("/", GetComment);

router.put('/:id',PutComment )

router.delete("/:id", DeleteComment);

module.exports = router;