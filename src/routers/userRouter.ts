import express from 'express';
import UserController from '../controllers/userController';
import Middleware from '../middlewares';
import { userSchema } from '../middlewares/joi';

const userRouter = express.Router();

const userController = new UserController();
const middleware = new Middleware(userSchema);

userRouter.post('/', middleware.validatefields, userController.create);

export default userRouter;