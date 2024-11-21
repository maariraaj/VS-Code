const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('expense-tracker', 'root', 'Qwerty123', {
    host: "localhost",
    dialect: "mysql",
});

module.exports = sequelize;