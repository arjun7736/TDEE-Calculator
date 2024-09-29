import { TDEE } from "../entities/TDEE";
import { User } from "../entities/User";

export interface IUserRepository {
  findHistoryById(id: string): Promise<TDEE[]>;
  saveDataById(
    id: string,
    weight: number,
    height: number,
    age: number,
    gender: string,
    activityLevel: string,
    tdee: number
  ): Promise<string>;
  findUserById(id:string):Promise<User | null>
  updateById(id:string,name:string):Promise<User|null>
}
