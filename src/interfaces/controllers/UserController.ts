import { NextFunction, Request, Response } from "express";
import { GetHistory } from "../../application/usecases/userUsecases/GetHistory";
import { SaveTDEEValue } from "../../application/usecases/userUsecases/SaveTDEEValue";

export class UserController {
  constructor(private getHistory: GetHistory,private saveValue:SaveTDEEValue) {}

  async individualHistory(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const history = await this.getHistory.execute(id);
      res.json(history);
    } catch (error) {
      next(error);
    }
  }

  async saveData(req:Request,res:Response,next:NextFunction){
    try {
      const {id,weight,height,age,gender,activityLevel}= req.body
      const data = await this.saveValue.execute(id,weight,height,age,gender,activityLevel)
      res.json(data)
    } catch (error) {
      next(error)
    }
  }
}
