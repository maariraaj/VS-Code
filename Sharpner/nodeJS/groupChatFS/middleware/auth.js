const User = require('../models/user');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.authorization = async (req, res, next) => {
    try {
        const token = req.header('Authorization');
        const decode = jwt.verify(token, 'a2b8d9f3e4c5d6a1b7567835t3i35786ter514idt757f8a9b0c1d2e3f');
        const user = await User.findByPk(decode.userId);
        if (user) {
            req.user = user;
            next();
        } else {
            res.status(401).send({ message: "Unauthorized" });
        }

    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            res.status(401).json({ message: 'Time out please sign in again' });
        } else {
            res.status(500).json({ message: 'Something went wrong  - please sign again' });
        }
    }
}