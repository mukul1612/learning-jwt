const postModel = require("../models/post.model");
const jwt = require("jsonwebtoken");

async function createPost(req, res) {
  console.log(req.cookies, "cokk");
  const token = req.cookies.token;
  const { quotes, quotesBy } = req.body;

  if (!token) {
    return res.status(401).json({ msg: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded,"decor")
  } catch (error) {
    return res.status(401).json({ msg: "Token is invalid" });
  }
  const post = await postModel.create({ quotes, quotesBy });
  res.status(201).json({ msg: "Post created successfully", post });
}

module.exports = {
  createPost,
};
