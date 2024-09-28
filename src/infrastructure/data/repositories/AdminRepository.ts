import { User } from "../../../domain/entities/User";
import { IAdminRepository } from "../../../domain/interfaces/IAdminRepository";
import UserDB from "../models/UserModel"

export class AdminRepository implements IAdminRepository{

  async  getAllUsers(): Promise<User[]> {
        return await UserDB.find({isAdmin:false})
    }
}