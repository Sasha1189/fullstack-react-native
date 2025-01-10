const express = require("express");
const { requireSingIn } = require("../controllers/userController");
const {
  createPostController,
  getAllPostController,
  getUserPostsController,
} = require("../controllers/postController");

//router object
const router = express.Router();

// CREATE SOCIAL MEDIA POST || use POST method
router.post("/create-post", requireSingIn, createPostController);

// GET ALL SOCIAL MEDIA POSTS || use GET method
router.get("/get-all-posts", getAllPostController);

// GET OWN(LOGGED USER) POSTS || use GET method
router.get("/get-user-post", requireSingIn, getUserPostsController);

//export
module.exports = router;
