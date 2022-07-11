import mongoose from "mongoose";

function connectDB(url) {
  mongoose.connect(url);
}
export default connectDB;
