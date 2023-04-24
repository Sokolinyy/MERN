import express from "express";
const router = express.Router();

// Get all blog posts
router.get("/", (req, res) => {
  res.json({ message: "Seems like you don't have blogs..." });
});

export default router;
