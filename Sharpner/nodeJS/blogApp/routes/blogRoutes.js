const express = require("express");
const Blog = require("../models/blog");
const Comment = require("../models/comment");

const router = express.Router();

router.get("/", async (req, res) => {
    const blogs = await Blog.findAll({ include: Comment });
    res.json(blogs);
});

router.post("/", async (req, res) => {
    const { title, author, description } = req.body;
    const blog = await Blog.create({ title, author, description });
    res.json(blog);
});

router.post("/:blogId/comments", async (req, res) => {
    const { blogId } = req.params;
    const { content } = req.body;

    const blog = await Blog.findByPk(blogId);
    if (!blog) {
        return res.status(404).json({ error: "Blog not found" });
    }

    const comment = await Comment.create({ content, BlogId: blogId });
    res.json(comment);
});

router.delete("/comments/:commentId", async (req, res) => {
    const { commentId } = req.params;

    const comment = await Comment.findByPk(commentId);
    if (!comment) {
        return res.status(404).json({ error: "Comment not found" });
    }

    await comment.destroy();
    res.json({ message: "Comment deleted successfully" });
});

module.exports = router;