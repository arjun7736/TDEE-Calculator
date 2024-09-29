import { IUserRepository } from "../../../domain/interfaces/IUserRepository";
import { CustomError } from "../../../utils/Error";

export class UpdateUser {
  constructor(private userRepo: IUserRepository) {}

  async execute(id: string, name: string) {
    if (!name) throw new CustomError(400, "name Required");
    return await this.userRepo.updateById(id, name);
  }
}
