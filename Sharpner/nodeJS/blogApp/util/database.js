const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('node-complete', 'root', 'Qwerty123', {
    host: "localhost",
    dialect: "mysql",
});

module.exports = sequelize;