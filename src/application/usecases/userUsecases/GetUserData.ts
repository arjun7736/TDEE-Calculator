import { User } from "../../../domain/entities/User";
import { IUserRepository } from "../../../domain/interfaces/IUserRepository";
import { CustomError } from "../../../utils/Error";

export class GetUserData {
  constructor(private userRepo: IUserRepository) {}

  async execute(id: string) {
    const data= await this.userRepo.findUserById(id);
    if(!data) throw new CustomError(404,"User Not Found")
    return new User(data?._id,data?.name,data?.email,data?.isAdmin,data?.isBlocked)
  }
}
