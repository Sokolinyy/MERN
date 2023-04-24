import express from "express";
import Blog from "../models/Blog.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newBlog = new Blog(req.body);
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });

    if (blogs.length === 0) {
      res.json({ message: "No blog posts found.", blogs: [] });
    } else {
      res.json(blogs);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
