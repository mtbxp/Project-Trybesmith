import { Router } from 'express';

import usersController from '../controllers/users.controller';

const userRouter = Router();

userRouter.post('/', usersController.insertUser);

export default userRouter;