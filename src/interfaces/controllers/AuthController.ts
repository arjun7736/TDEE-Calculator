import { NextFunction, Request, Response } from "express";
import { UserLogin } from "../../application/usecases/authUsecases/Login";
import { generateToken } from "../../utils/Token";
import { UserRegister } from "../../application/usecases/authUsecases/UserRegister";
import { ResetPassword } from "../../application/usecases/authUsecases/ResetPass";

export class AuthController {
  constructor(
    private userLogin: UserLogin,
    private userRegister: UserRegister,
    private resetPass:ResetPassword
  ) {}

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      console.log(req.body)
      const login = await this.userLogin.execute(email, password);
      const token = generateToken(login._id);
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

  async resetPassword(req:Request,res:Response,next:NextFunction){
    try {
      const {email,newPassword,confirmPassword} = req.body
      const data =await this.resetPass.execute(email,newPassword,confirmPassword)
      res.json(data)
    } catch (error) {
      next(error)
    }
  }
}
