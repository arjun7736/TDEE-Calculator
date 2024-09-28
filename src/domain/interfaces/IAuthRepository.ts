import { User } from "../entities/User";

export interface IAuthRepository {
    findByEmail(email: string): Promise<User|null>;
    createUser(email: string, password: string,name:string): Promise<User>;
}