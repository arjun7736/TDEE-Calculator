import { NextFunction, Request, Response } from "express";
import { UserLogin } from "../../application/usecases/authUsecases/Login";
import { generateToken } from "../../utils/Token";
import { UserRegister } from "../../application/usecases/authUsecases/UserRegister";

export class AuthController {
  constructor(
    private userLogin: UserLogin,
    private userRegister: UserRegister
  ) {}

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const login = await this.userLogin.execute(email, password);
      const token = await generateToken(login._id);
      res.json({ user: login, token: token });
    } catch (error) {
      next(error);
    }
  }
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      await this.userRegister.execute(email, password);
      res.json("User Registered");
    } catch (error) {
      next(error);
    }
  }
}
