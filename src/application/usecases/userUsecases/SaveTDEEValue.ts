import { IUserRepository } from "../../../domain/interfaces/IUserRepository";
import {
  calculateBMR,
  getActivityMultiplier,
} from "../../../utils/CalculateValue";

export class SaveTDEEValue {
  constructor(private userRepo: IUserRepository) {}

  async execute(
    id: string,
    weight: number,
    height: number,
    age: number,
    gender: string,
    activityLevel: string
  ) {
    type Gender = "male" | "female";
    type ActivityLevel =
      | "sedentary"
      | "lightly_active"
      | "moderately_active"
      | "very_active"
      | "super_active";

    const bmr = calculateBMR(weight, height, age, gender as Gender);
    const multiplier = getActivityMultiplier(activityLevel as ActivityLevel);
    const tdee = bmr * multiplier;
   return await this.userRepo.saveDataById(
      id,
      weight,
      height,
      age,
      gender,
      activityLevel,
      tdee
    );
  }
}
