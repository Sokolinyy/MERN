import Express from "express";
const router = Express.Router();

router.get("/", (req, res) => {
  const aboutData = {
    title: "About Us",
    description: "This is the about page for our MERN blog application.",
  };
  res.json(aboutData);
});

export default router;
