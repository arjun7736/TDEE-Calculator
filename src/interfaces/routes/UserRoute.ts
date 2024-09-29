import {Router} from "express"
import verifyToken from "../../middlewares/JWTmiddleware"
import { UserRepository } from "../../infrastructure/data/repositories/UserRepository"
import { GetHistory } from "../../application/usecases/userUsecases/GetHistory"
import { UserController } from "../controllers/UserController"
import { SaveTDEEValue } from "../../application/usecases/userUsecases/SaveTDEEValue"
import { GetUserData } from "../../application/usecases/userUsecases/GetUserData"
import { UpdateUser } from "../../application/usecases/userUsecases/UpdateUser"

const router=Router()

const userRepository =new UserRepository()
const getHistory = new GetHistory(userRepository)
const saveData =new SaveTDEEValue(userRepository)
const getUser = new GetUserData(userRepository)
const updateUser =new UpdateUser(userRepository)

const userController = new UserController(getHistory,saveData,getUser,updateUser)

router.post("/save-tdee",verifyToken,(req,res,next)=>userController.saveData(req,res,next))
router.get("/history/:id",verifyToken,(req,res,next)=>userController.individualHistory(req,res,next))
router.get("/get-userdata/:id",verifyToken,(req,res,next)=>userController.getUserData(req,res,next))
router.put("/update-profile",verifyToken,(req,res,next)=>userController.updateProfile(req,res,next))

export default router