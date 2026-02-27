const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
    const { name, email, password } = req.body;
    const isExist = await userModel.findOne({ email });
        if (isExist) {
            return res.status(409).json({ msg: "Email already exists" });
        }
    // try {
        const user = await userModel.create({ name, email, password });
        
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.cookie("token", token);
        res.status(201).json({ msg: "User created successfully" ,
            user:user,
        });
    // } catch (error) {
    //     if (error.code === 11000 ) {
    //         // Duplicate key error, handle it here
    //         res.status(409).json({ msg: "Email already exists2" });
    //     } else {
    //         // Some other error, handle it here
    //         res.status(500).json({ msg: "Internal server error" });
    //     }
    // }
}

module.exports = {
    registerUser
}