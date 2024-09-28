import { User } from "../../../domain/entities/User";
import { IAuthRepository } from "../../../domain/interfaces/IAuthRepository";

export class AuthRespository implements IAuthRepository {
  login(email: string, password: string): Promise<User | null> {
    return null;
  }
}
