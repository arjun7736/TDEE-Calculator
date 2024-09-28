import { IAdminRepository } from "../../../domain/interfaces/IAdminRepository";

export class BlockUser{
    constructor(private adminRepo:IAdminRepository){}

    async execute(id:string){
       return await this.adminRepo.findByIdAndBlock(id)
    }
}