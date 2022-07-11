import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/connect.js";

import blogsRoutes from "./routes/blogsRoutes.js";
import authRoutes from "./routes/authRoutes.js";

app.use(express.json());

app.use("/api/v1/blogs", blogsRoutes);
app.use("/api/v1/auth", authRoutes);

const PORT = process.env.PORT || 5000;
function start() {
  try {
    connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server running at PORT:${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
}
start();
