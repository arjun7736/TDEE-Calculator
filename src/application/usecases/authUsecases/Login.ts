import { User } from "../../../domain/entities/User";
import { IAuthRepository } from "../../../domain/interfaces/IAuthRepository";
import { CustomError } from "../../../utils/Error";
import bcrypt from "bcryptjs";

export class UserLogin {
  constructor(private authRepo: IAuthRepository) {}

  async execute(email: string, password: string): Promise<User> {
    if (!email || !password) throw new CustomError(400, "Fill All the Field");
    const user = await this.authRepo.findByEmail(email);

    if (!user) throw new CustomError(400, "Invalid Credentials");
    if (!user.password) throw new CustomError(400, "Invalid Credentials");

    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) throw new CustomError(400, "Invalid Credentials");

    return new User(user._id, user.name, user.email, user.isAdmin,user.isBlocked);
  }
}
