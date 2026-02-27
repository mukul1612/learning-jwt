const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    quotes: String,
    quotesBy: String
    
});
const postModel = mongoose.model("post", postSchema);
module.exports = postModel;