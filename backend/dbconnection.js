import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    // eslint-disable-next-line no-undef
    await mongoose.connect(process.env.MONGO_URL);
    console.log("✅ MONGO DB CONNECTED SUCCESSFULLY!");
  } catch (error) {
    console.error("❌ MONGODB CONNECTION ERROR:", error.message);
    // eslint-disable-next-line no-undef
    process.exit(1); // Stop app if DB connection fails
  }
};

export default connectDB;
