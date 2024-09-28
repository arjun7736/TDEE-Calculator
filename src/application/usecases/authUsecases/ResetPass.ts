import { IAuthRepository } from "../../../domain/interfaces/IAuthRepository";
import { CustomError } from "../../../utils/Error";
import bcrypt from "bcryptjs";
import { checkPassword } from "../../../utils/Validations";

export class ResetPassword {
  constructor(private authRepo: IAuthRepository) {}

  async execute(email: string, newPassword: string, confirmPassword: string) {

    if (!email || !newPassword || !confirmPassword) throw new CustomError(400, "Fill All the Field");
    
    const user = await this.authRepo.findByEmail(email);
    if (!user) throw new CustomError(404, "User not Found");

    if (newPassword !== confirmPassword)
      throw new CustomError(400, "Password not Matched");

    const valiedPass = checkPassword(newPassword);
    if (!valiedPass)
      throw new CustomError(
        400,
        "Password must Contain number,special character,capital letter and length must be greater than 8"
      );
    const hpass = await bcrypt.hash(newPassword, 10);
    await this.authRepo.findByIdAndUpdatePassword(user._id,hpass)
    return "Password Updated"
  }
}
