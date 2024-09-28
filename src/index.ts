import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./infrastructure/database/db";
dotenv.config();

const port: string | undefined = process.env.PORT;
const app = express();

connectDB()
if (port) {
  app.listen(port, () => {
    console.log("server is running");
  });
}

