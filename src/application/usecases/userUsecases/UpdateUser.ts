import { User } from "../../../domain/entities/User";
import { IUserRepository } from "../../../domain/interfaces/IUserRepository";
import { CustomError } from "../../../utils/Error";

export class UpdateUser {
  constructor(private userRepo: IUserRepository) {}

  async execute(id: string, name: string) {
    if (!name) throw new CustomError(400, "name Required");
    const data = await this.userRepo.updateById(id, name);
    if(!data) throw new CustomError(500,"Update Failed")
    return new User(data?._id,data?.name,data?.email,data?.isAdmin,data?.isBlocked)
  }
}
