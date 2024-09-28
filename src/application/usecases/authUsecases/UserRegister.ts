import { IAuthRepository } from "../../../domain/interfaces/IAuthRepository";
import { CustomError } from "../../../utils/Error";
import bcrypt from "bcryptjs";
import { checkEmail, checkPassword } from "../../../utils/Validations";

export class UserRegister {
  constructor(private authRepo: IAuthRepository) {}

  async execute(email: string, password: string) {
    if(!email || !password) throw new CustomError(400, "Fill All the Field");
    
    const user = await this.authRepo.findByEmail(email);
    if (user) throw new CustomError(400, "User Already Exists");

    const valiedEmail =  checkEmail(email);
    const valiedPassword =  checkPassword(password);

    if (!valiedEmail) throw new CustomError(400, "Invalid Email");
    if (!valiedPassword)
      throw new CustomError(
        400,
        "Password must Contain number,special character,capital letter and length must be greater than 8"
      );
    const hpass = await bcrypt.hash(password, 10);
    const name = email.split("@")[0];
    const newUser = await this.authRepo.createUser(email, hpass,name);
    return newUser;
  }
}
