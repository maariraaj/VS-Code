const path = require('path');
const Chat = require('../models/chat');
const User = require('../models/user');
const { Op } = require("sequelize");

exports.getChat = (req, res) => {
  res.sendFile(path.join(__dirname, '../views/chat/chat.html'));
};

exports.getChats = async (req, res) => {
  try {
    const { after } = req.query;
    let whereClause = {};

    if (after) {
      const afterDate = new Date(after);
      if (!isNaN(afterDate)) {
        whereClause.createdAt = { [Op.gt]: afterDate };
      }
    }

    const chats = await Chat.findAll({
      where: whereClause,
      include: User,
      order: [["createdAt", "DESC"]],
    });
    res.json(chats);
  } catch (error) {
    console.error("Error fetching chats:", error);
    res.status(500).send("Server error");
  }
};

exports.postChat = async (req, res) => {
  const { message, userId, username } = req.body;
  try {
    const chat = await Chat.create({ message, userId });
    const data = {
      name: username,
      message: chat.dataValues.message,
      userId: chat.dataValues.userId,
      updatedAt: chat.dataValues.updatedAt,
      createdAt: chat.dataValues.createdAt
    };
    res.status(201).json(data);
  } catch (error) {
    console.error('Error saving chat:', error);
    res.status(500).send('Server error');
  }
};