import express from 'express';

import { getAllController, userRegistrationController } from '../controller/userController';

const userRouter = express.Router();

userRouter.get('/', getAllController);
userRouter.post('/', userRegistrationController);

export default userRouter;