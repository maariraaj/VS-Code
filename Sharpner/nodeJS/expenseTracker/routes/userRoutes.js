const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/signUp", async (req, res) => {
    const { name, email, password } = req.body;
    if (!email || !password || !name) {
        return res.status(400).json({ error: "All fields are required" });
    }
    try {
        const existingUser = await User.findOne({ where: { email } });

        if (existingUser) {
            return res.status(409).json({ error: "User already exists" });
        }

        const newUser = await User.create({ name, email, password });

        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
router.post("/logIn", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }

    try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const isPasswordMatch = password === user.password;
        if (!isPasswordMatch) {
            return res.status(401).json({ error: "User not authorized" });
        }
        return res.status(200).json({ message: "User login successful", user: { id: user.id, name: user.name } });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
module.exports = router;