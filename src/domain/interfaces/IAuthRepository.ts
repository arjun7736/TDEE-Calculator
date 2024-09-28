import mongoose from "mongoose";
import { User } from "../entities/User";

export interface IAuthRepository {
    findByEmail(email: string): Promise<User|null>;
    createUser(email: string, password: string,name:string): Promise<User>;
    findByIdAndUpdatePassword(id: mongoose.Types.ObjectId, password: string): Promise<User | null>;
}