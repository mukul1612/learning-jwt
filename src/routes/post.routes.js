const  express = require("express");
const router = express.Router();
const authController = require("../controllers/post.controler");

router.post("/create", authController.createPost);


module.exports = router;