import { IAdminRepository } from "../../../domain/interfaces/IAdminRepository";

export class UnblockUser{
    constructor(private adminRepo:IAdminRepository){}

    async execute(id:string){
      return await this.adminRepo.findByIdAndUnblock(id)
    }
}