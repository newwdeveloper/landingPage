import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./dbconnection.js";
import formRoutes from "./router.js";

dotenv.config();

// Set up port
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000;

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Replaces body-parser

// Connect to Database
connectDB();

// Routes
app.use("/api/form", formRoutes);

// Start Server
/*app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});*/
export default app;
