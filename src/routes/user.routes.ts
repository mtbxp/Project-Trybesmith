import { Router } from 'express';
import UserController from '../controllers/user.controller';

const { create } = new UserController();

const userRouter = Router();

userRouter.post('/', create);

export default userRouter;
