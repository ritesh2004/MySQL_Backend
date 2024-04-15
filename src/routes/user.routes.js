import { Router } from "express";
import { logIn, signUP } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post("/user/signup",signUP);

userRouter.post("/user/login",logIn);

export default userRouter;