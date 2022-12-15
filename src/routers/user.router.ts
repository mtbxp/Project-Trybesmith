import { Router } from 'express';
import * as UserController from '../controllers/user.controller';
import login from '../controllers/login';
import validLogin from '../middlewares/validLogin';
import validUser from '../middlewares/validUser';

const userRouter = Router();

userRouter.post('/users', validUser, UserController.create);
userRouter.post('/login', validLogin, login);

export default userRouter;