const express = require("express");
const cokkieParser = require("cookie-parser");
const authRoutes = require("./routes/auth.routes");
const postRoutes = require("./routes/post.routes");


const app = express();
app.use(express.json());
app.use(cokkieParser());
app.use("/api/auth",authRoutes);
app.use("/api/post",postRoutes);




module.exports = app