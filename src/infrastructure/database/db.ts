import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const mongo: string | undefined = process.env.MONGO_URI;

const connectDB =async()=>{

if (mongo) {
    mongoose
      .connect(mongo)
      .then(() => {
        console.log("connected to mongoDB");
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
export default connectDB;
