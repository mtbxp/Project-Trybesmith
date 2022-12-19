import { Router } from 'express';
import validateJWT from '../auth/validateJWT';
import usersController from '../controllers/users.controller';

const userRouter = Router();

userRouter.get('/', validateJWT, usersController.getAllUsers);
userRouter.post('/', usersController.registerUser);

export default userRouter;
