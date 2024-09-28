import express, { urlencoded } from "express";
import dotenv from "dotenv";
import connectDB from "./infrastructure/database/db";
import errorMiddleware from "./middlewares/ErrorMiddleware";
dotenv.config();
import authRoute from "./interfaces/routes/AuthRoute"

const port: string | undefined = process.env.PORT;
const app = express();

connectDB()
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use("/api/auth",authRoute)
app.use(errorMiddleware)


if (port) {
  app.listen(port, () => {
    console.log("server is running");
  });
}

