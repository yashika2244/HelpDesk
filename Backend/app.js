import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import dotenv from 'dotenv';
import authRouter from './routes/authRoutes.js';
import connectDB from "./config/databaseConnection.js"; 
dotenv.config();

const app = express();
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://help-desk-olive.vercel.app/',
  ],
  credentials: true,
}));
app.use(express.json());

// Routes
app.use("/api/auth", authRouter);

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(` Server running on port ${PORT}`);
});



