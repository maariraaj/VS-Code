const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const User = sequelize.define("User", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    mobile: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            is: /^[0-9]+$/i,
        },
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = User;