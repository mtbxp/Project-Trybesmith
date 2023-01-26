import { Router } from 'express';
import userController from '../controller/userController';
import userValidation from '../middlewares/userValidation';

const userRouter = Router();

userRouter.post('/', userValidation, userController.addUser);

export default userRouter;