import {Router} from "express"
import verifyToken from "../../middlewares/JWTmiddleware"
import { UserRepository } from "../../infrastructure/data/repositories/UserRepository"
import { GetHistory } from "../../application/usecases/userUsecases/GetHistory"
import { UserController } from "../controllers/UserController"
import { SaveTDEEValue } from "../../application/usecases/userUsecases/SaveTDEEValue"

const router=Router()

const userRepository =new UserRepository()
const getHistory = new GetHistory(userRepository)
const saveData =new SaveTDEEValue(userRepository)

const userController = new UserController(getHistory,saveData)

router.post("/save-tdee",verifyToken,(req,res,next)=>userController.saveData(req,res,next))
router.get("/history/:id",verifyToken,(req,res,next)=>userController.individualHistory(req,res,next))

export default router