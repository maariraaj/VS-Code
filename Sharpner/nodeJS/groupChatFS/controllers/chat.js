const path = require('path');
const Chat = require('../models/chat');
const User = require('../models/user');

exports.getChat = (req, res) => {
  res.sendFile(path.join(__dirname, '../views/chat/chat.html'));
};

exports.getChats = async (req, res) => {
  try {
    const chats = await Chat.findAll({ include: User, order: [['createdAt', 'DESC']] });
    res.json(chats);
  } catch (error) {
    console.error('Error fetching chats:', error);
    res.status(500).send('Server error');
  }
};

exports.postChat = async (req, res) => {
  const { message, userId } = req.body;
  try {
    const chat = await Chat.create({ message, userId });
    res.status(201).json(chat);
  } catch (error) {
    console.error('Error saving chat:', error);
    res.status(500).send('Server error');
  }
};