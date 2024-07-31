import express from "express"
import protectRoute from "../middleware/protectRoute.js";
import { getUserForSidebar } from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.get('/',protectRoute, getUserForSidebar);

export default userRouter;