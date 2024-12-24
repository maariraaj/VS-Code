const express = require("express");
const router = express.Router();
const chatController = require("../controllers/chat");

router.get("/", chatController.getChat);

router.get("/chat", chatController.getChats);

router.post("/chat", chatController.postChat);

module.exports = router;