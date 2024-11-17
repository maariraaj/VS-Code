const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Blog = sequelize.define("Blog", {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
});

module.exports = Blog;