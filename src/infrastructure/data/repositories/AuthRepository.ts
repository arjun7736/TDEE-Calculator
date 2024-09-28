import mongoose from "mongoose";
import { User } from "../../../domain/entities/User";
import { IAuthRepository } from "../../../domain/interfaces/IAuthRepository";
import UserDB from "../models/UserModel"
export class AuthRespository implements IAuthRepository {
 
 async findByEmail(email: string): Promise<User | null> {
    return await UserDB.findOne({ email });
  }
  createUser(email: string, password: string,name:string): Promise<User> {
    return UserDB.create({ email, password ,name,isAdmin:false});
  }
  findByIdAndUpdatePassword(id: mongoose.Types.ObjectId, password: string): Promise<User | null> {
    return UserDB.findByIdAndUpdate(id, { password });
  }
}
