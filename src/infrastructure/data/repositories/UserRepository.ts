import { TDEE } from "../../../domain/entities/TDEE";
import { User } from "../../../domain/entities/User";
import { IUserRepository } from "../../../domain/interfaces/IUserRepository";
import TDEEDB from "../models/TdeeModel";
import UserDB from "../models/UserModel";

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

 async findUserById(id: string): Promise<User|null> {
    return await UserDB.findById(id)
  }

 async updateById(id: string, name: string): Promise<User | null> {
  return await UserDB.findByIdAndUpdate({_id:id},{name:name},{new:true})
  }
}
