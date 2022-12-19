import { Router } from 'express';
import usersController from '../controllers/users.controller';

const userRouter = Router();

userRouter.get('/', usersController.getAllUsers);
userRouter.post('/', usersController.registerUser);

export default userRouter;
