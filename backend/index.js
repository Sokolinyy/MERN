import express from "express";
import cors from "cors";
import aboutRoutes from "./routes/about.js";
import blogRoutes from "./routes/blogs.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());

app.use("/", blogRoutes);
app.use("/about", aboutRoutes);
app.use("/create-blog", blogRoutes);

// ...

app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
