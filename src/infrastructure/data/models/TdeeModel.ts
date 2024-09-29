import mongoose, { Schema, Document } from "mongoose";

interface ITDEE extends Document {
  userId: string;
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
    type: String,
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
    enum: ['male', 'female'], 
    required: true,
  },
  activityLevel: {
    type: String,
    enum: ['sedentary', 'lightly_active', 'moderately_active', 'very_active', 'super_active'],
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
