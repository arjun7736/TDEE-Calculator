import mongoose, { Schema, Document } from "mongoose";

interface ITDEE extends Document {
  userId: mongoose.Types.ObjectId;
  weight: number;
  height: number;
  age: number;
  gender: string;
  activityLevel: string;
  tdeeValue: number;
  date: Date;
}

const tdeeSchema: Schema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  activityLevel: {
    type: String,
    required: true,
  },
  tdeeValue: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<ITDEE>("TDEE", tdeeSchema);
