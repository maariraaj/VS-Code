const express = require("express");
const router = express.Router();
const authController = require('../controllers/auth');

router.get("/signup", authController.getSignup);

router.post("/signup", authController.postSignUp);

module.exports = router;