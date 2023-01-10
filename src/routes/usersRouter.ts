import { Router } from 'express';
import usersController from '../controllers/userController';

const userRouter = Router();

userRouter.post('/', usersController.registerUser);

export default userRouter;