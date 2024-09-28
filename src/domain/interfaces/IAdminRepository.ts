import { User } from "../entities/User";

export interface IAdminRepository{
    getAllUsers():Promise<User[]>
}