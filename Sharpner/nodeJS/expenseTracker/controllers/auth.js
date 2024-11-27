const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require('jsonwebtoken');
const Brevo = require("sib-api-v3-sdk");
require('dotenv').config();

exports.postSignUp = async (req, res) => {
    const { name, email, password } = req.body;
    if (!email || !password || !name) {
        return res.status(400).json({ error: "All fields are required" });
    }
    try {
        const existingUser = await User.findOne({ where: { email } });

        if (existingUser) {
            return res.status(409).json({ error: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ name, email, password: hashedPassword });

        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

function generateAccessToken(id, name) {
    return jwt.sign({ userId: id, name }, 'a2b8d9f3e4c5d6a1b7e2c3d4f5e6a7b8c9d0f1e6e7f8a9b0c1d2e3f');
}
exports.postLogIn = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }

    try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            return res.status(401).json({ error: "User not authorized" });
        }
        return res.status(200).json({ message: "User login successful", user: { id: user.id, name: user.name, token: generateAccessToken(user.id, user.name) } });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.postForgotPass = async (req, res) => {
    const { email } = req.body;
    try {
        const defaultClient = Brevo.ApiClient.instance;
        const apiKey = defaultClient.authentications["api-key"];
        apiKey.apiKey = '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';
        const tranEmailApi = new Brevo.TransactionalEmailsApi();
        const sendSmtpEmail = {
            to: [{ email }],
            sender: { email: "test@gmail.com", name: "Hustler" },
            subject: "Reset Password Request",
            htmlContent: "<p>Hello</p>",
        };
        await tranEmailApi.sendTransacEmail(sendSmtpEmail);

        res.status(200).json({ success: true, message: "Reset email sent successfully!" });
    } catch (error) {
        console.error("Error sending reset email:", error);
        res.status(500).json({ success: false, message: "Failed to send reset email" });
    }
};