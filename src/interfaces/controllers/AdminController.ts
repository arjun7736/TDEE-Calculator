import { NextFunction, Request, Response } from "express";
import { GetAllUsers } from "../../application/usecases/adminUsecases/GetAllUsers";

export class AdminController {
  constructor(private getAllUsers: GetAllUsers) {}

  async allUserData(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await this.getAllUsers.execute();
      res.json(data);
    } catch (error) {
      next(error);
    }
  }
}
