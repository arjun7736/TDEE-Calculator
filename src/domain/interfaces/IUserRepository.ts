import { TDEE } from "../entities/TDEE";

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
}
