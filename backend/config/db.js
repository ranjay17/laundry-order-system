import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // connect using MONGO_URI from .env
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error:", error.message);

    // exit process if DB not connected
    process.exit(1);
  }
};

export default connectDB;
