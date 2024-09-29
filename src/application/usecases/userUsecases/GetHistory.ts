import { IUserRepository } from "../../../domain/interfaces/IUserRepository";

export class GetHistory{
    constructor(private userRepo:IUserRepository){}

    async execute(userId:string){
        return await this.userRepo.findHistoryById(userId)
    }
}