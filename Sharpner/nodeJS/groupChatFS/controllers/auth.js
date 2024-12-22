const bcrypt = require("bcrypt");
const path = require('path');
const User = require("../models/user");

exports.getSignup = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/auth/signup.html'));
};

exports.postSignUp = async (req, res) => {
    const { name, email, mobile, password } = req.body;
    if (!email || !mobile || !password || !name) {
        return res.status(400).json({ error: "All fields are required" });
    }
    try {
        const existingEmail = await User.findOne({ where: { email } });
        const existingMobile = await User.findOne({ where: { mobile } });

        if (existingEmail) {
            return res.status(409).json({ error: "Email ID already exists." });
        }
        if (existingMobile) {
            return res.status(409).json({ error: "Mobile number already exists." });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ name, email, mobile, password: hashedPassword });

        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "An error occurred. Please try again." });
    }
};