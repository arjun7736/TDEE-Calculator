import express, { urlencoded } from "express";
import dotenv from "dotenv";
import connectDB from "./infrastructure/database/db";
import errorMiddleware from "./middlewares/ErrorMiddleware";
dotenv.config();
import authRoute from "./interfaces/routes/AuthRoute"
import adminRoute from "./interfaces/routes/AdminRoute"
import userRoute from "./interfaces/routes/UserRoute"
import morgan from "morgan"

const port: string | undefined = process.env.PORT;
const app = express();

connectDB()
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"))

app.use("/api/auth",authRoute)
app.use("/api/admin",adminRoute)
app.use("/api/user",userRoute)

app.use(errorMiddleware)


if (port) {
  app.listen(port, () => {
    console.log("server is running");
  });
}

