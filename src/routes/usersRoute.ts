import { Router } from 'express';
import validateJWT from '../auth/validateJWT';
import usersController from '../controllers/users.controller';
import ValidateUser from '../middleware/userValidation';

const userRouter = Router();

userRouter.get('/', validateJWT, usersController.getAllUsers);
userRouter.post('/', ValidateUser, usersController.registerUser);

export default userRouter;
