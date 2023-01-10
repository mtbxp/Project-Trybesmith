import express from 'express';

import productsRegistrationController from '../controller/productsController';

const userRouter = express.Router();

userRouter.post('/', productsRegistrationController);

export default userRouter;