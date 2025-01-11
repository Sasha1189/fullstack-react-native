const express = require("express");
const { requireSingIn } = require("../controllers/userController");
const {
  createPostController,
  getAllPostController,
  getUserPostsController,
  deletePostController,
} = require("../controllers/postController");

//router object
const router = express.Router();

// CREATE SOCIAL MEDIA POST || use POST method
router.post("/create-post", requireSingIn, createPostController);

// GET ALL SOCIAL MEDIA POSTS || use GET method
router.get("/get-all-posts", getAllPostController);

// GET OWN(LOGGED USER) POSTS || use GET method
router.get("/get-user-post", requireSingIn, getUserPostsController);

// DELETE POST || use DELETE method
router.delete("/delete-post/:id", requireSingIn, deletePostController);

//export
module.exports = router;
