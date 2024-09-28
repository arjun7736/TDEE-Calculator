import {Router} from "express"
import { AdminRepository } from "../../infrastructure/data/repositories/AdminRepository"
import { AdminController } from "../controllers/AdminController"
import { GetAllUsers } from "../../application/usecases/adminUsecases/GetAllUsers"
import verifyToken from "../../middlewares/JWTmiddleware"
import { BlockUser } from "../../application/usecases/adminUsecases/BlockUser"
import { UnblockUser } from "../../application/usecases/adminUsecases/Unblock"

const router =Router()

const adminRepository = new AdminRepository()
const getAllUsers =new GetAllUsers(adminRepository)
const blockUser = new BlockUser(adminRepository)
const unblockUser = new UnblockUser(adminRepository)

const adminController = new AdminController(getAllUsers,blockUser,unblockUser)

router.get("/get-allusers",verifyToken,(req,res,next)=>adminController.allUserData(req,res,next))
router.patch("/block-user/:id",verifyToken,(req,res,next)=>adminController.block(req,res,next))
router.patch("/unblock-user/:id",verifyToken,(req,res,next)=>adminController.unblock(req,res,next))



export default router