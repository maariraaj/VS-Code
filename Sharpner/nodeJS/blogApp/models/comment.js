const Sequelize = require("sequelize");
const sequelize = require("../util/database");
const Blog = require("./blog");

const Comment = sequelize.define("Comment", {
    content: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
});

Blog.hasMany(Comment, { onDelete: "CASCADE" });
Comment.belongsTo(Blog);

module.exports = Comment;