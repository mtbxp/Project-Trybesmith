import express from 'express';

import getAllController from '../controller/userController';

const userRouter = express.Router();

userRouter.get('/', getAllController);

export default userRouter;