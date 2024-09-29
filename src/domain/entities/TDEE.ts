import mongoose from "mongoose";

export class TDEE {
  constructor(
    public readonly _id: mongoose.Types.ObjectId,
    public readonly userId: string,
    public readonly weight: number,
    public readonly height: number,
    public readonly age: number,
    public readonly gender: string,
    public readonly activityLevel: string,
    public readonly tdeeValue: number,
    public readonly date: Date
  ) {}
}
