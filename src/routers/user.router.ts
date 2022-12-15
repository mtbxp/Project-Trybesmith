import { Router } from 'express';
import * as UserController from '../controllers/user.controller';
import login from '../controllers/login';
import validLogin from '../middlewares/validLogin';

const userRouter = Router();

userRouter.post('/users', UserController.create);
userRouter.post('/login', validLogin, login);

export default userRouter;