const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/signUp", async (req, res) => {
    const { name, email, password } = req.body;

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

module.exports = router;