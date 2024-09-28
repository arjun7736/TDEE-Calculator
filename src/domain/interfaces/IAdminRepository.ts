import { User } from "../entities/User";

export interface IAdminRepository{
    getAllUsers():Promise<User[]>
    findByIdAndBlock(id:string):Promise<string>
    findByIdAndUnblock(id:string):Promise<string>
}