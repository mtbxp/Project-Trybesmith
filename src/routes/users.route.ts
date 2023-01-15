import { Router } from 'express';
import * as usersController from '../controller/users.controller';

const userRouter = Router();

userRouter.post('/', usersController.default);

export default userRouter;