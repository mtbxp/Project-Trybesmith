import { Router } from 'express';
import UsersController from '../controllers/users.controller';

const userRouter = Router();

const usersController = new UsersController();

userRouter.post('/', usersController.create);

export default userRouter;
