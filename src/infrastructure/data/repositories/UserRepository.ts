import { TDEE } from "../../../domain/entities/TDEE";
import { IUserRepository } from "../../../domain/interfaces/IUserRepository";
import TDEEDB from "../models/TdeeModel";

export class UserRepository implements IUserRepository {
  async saveDataById(
    id: string,
    weight: number,
    height: number,
    age: number,
    gender: string,
    activityLevel: string,
    tdee: number
  ): Promise<string> {
    await TDEEDB.create({
      userId: id,
      weight,
      height,
      age,
      gender,
      activityLevel,
      tdeeValue: tdee,
    });
    return "Saved SuccessFully";
  }

  
  async findHistoryById(id: string): Promise<TDEE[]> {
    return await TDEEDB.find({ userId: id });
  }
}
