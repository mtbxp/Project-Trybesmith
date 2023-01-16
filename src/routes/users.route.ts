import { Router } from 'express';
import userController from '../controllers/user.controller';
import validateUser from '../middlewares/userValidate';

const userRouter = Router();

userRouter.post('/', validateUser, userController.addNewUser);

export default userRouter;
