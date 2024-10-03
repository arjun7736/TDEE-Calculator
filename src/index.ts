import express, { urlencoded } from "express";
import dotenv from "dotenv";
import connectDB from "./infrastructure/database/db";
import errorMiddleware from "./middlewares/ErrorMiddleware";
dotenv.config();
import authRoute from "./interfaces/routes/AuthRoute";
import adminRoute from "./interfaces/routes/AdminRoute";
import userRoute from "./interfaces/routes/UserRoute";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import cors from "cors"

const apirateLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: "Too many Requests From thisn IP Address",
});

const corsOptions = {
  origin: 'http://localhost:3000', 
  methods: ['GET', 'POST', 'PUT', 'PATCH','DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, 
};

const port: string | undefined = process.env.PORT;
const app = express();
app.use(cors(corsOptions))
connectDB();
app.set("trust proxy", false);
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api", apirateLimit);
app.use("/api/auth", authRoute);
app.use("/api/admin", adminRoute);
app.use("/api/user", userRoute);

app.use(errorMiddleware);

if (port) {
  app.listen(port, () => {
    console.log("server is running");
  });
}
