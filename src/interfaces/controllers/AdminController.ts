import { NextFunction, Request, Response } from "express";
import { GetAllUsers } from "../../application/usecases/adminUsecases/GetAllUsers";
import { BlockUser } from "../../application/usecases/adminUsecases/BlockUser";
import { UnblockUser } from "../../application/usecases/adminUsecases/Unblock";

export class AdminController {
  constructor(
    private getAllUsers: GetAllUsers,
    private blockUser: BlockUser,
    private unblockUser: UnblockUser
  ) {}

  async allUserData(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await this.getAllUsers.execute();
      res.json(data);
    } catch (error) {
      next(error);
    }
  }

  async block(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const data = await this.blockUser.execute(id);
      res.json(data);
    } catch (error) {
      next(error);
    }
  }
  async unblock(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const data = await this.unblockUser.execute(id);
    res.json(data);
    try {
    } catch (error) {
      next(error);
    }
  }
}
