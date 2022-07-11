import mongoose from "mongoose";

const blogsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    image: { type: String },
    content: { type: String, required: true },
    author: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Blog", blogsSchema);
