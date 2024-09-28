import {Router} from "express"
import { AdminRepository } from "../../infrastructure/data/repositories/AdminRepository"
import { AdminController } from "../controllers/AdminController"
import { GetAllUsers } from "../../application/usecases/adminUsecases/GetAllUsers"

const router =Router()

const adminRepository = new AdminRepository()
const getAllUsers =new GetAllUsers(adminRepository)

const adminController = new AdminController(getAllUsers)

router.get("/get-allusers",(req,res,next)=>adminController.allUserData(req,res,next))

export default router