import { User } from "../../../domain/entities/User";
import { IAdminRepository } from "../../../domain/interfaces/IAdminRepository";

export class GetAllUsers {
  constructor(private adminRepo: IAdminRepository) {}

  async execute() {
    const users = await this.adminRepo.getAllUsers();
    return users.map(user=> new User(user._id,user.name,user.email,user.isAdmin,user.isBlocked))
  }
}
