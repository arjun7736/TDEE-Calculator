import express from "express"
import { AuthRespository } from "../../infrastructure/data/repositories/AuthRepository"
import { UserLogin } from "../../application/usecases/authUsecases/Login"
import { AuthController } from "../controllers/AuthController"
import { UserRegister } from "../../application/usecases/authUsecases/UserRegister"
import { ResetPassword } from "../../application/usecases/authUsecases/ResetPass"

const router = express.Router()

const authRepository = new AuthRespository()
const userLogin =new UserLogin(authRepository)
const userRegister = new UserRegister(authRepository)
const resetPass = new ResetPassword(authRepository)

const authController =new AuthController(userLogin,userRegister,resetPass)


router.post("/login",(req,res,next)=>authController.login(req,res,next))
router.post("/register",(req,res,next)=>authController.register(req,res,next))
router.patch("/reset-password",(req,res,next)=>authController.resetPassword(req,res,next))
    



export default router