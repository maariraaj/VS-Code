const express = require("express");
const router = express.Router();
const authController = require('../controllers/auth');

router.post("/signUp", authController.postSignUp);
router.post("/logIn", authController.postLogIn);

module.exports = router;