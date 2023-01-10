import express from 'express';

import { productsRegistrationController, getProductsController }
  from '../controller/productsController';

const userRouter = express.Router();

userRouter.post('/', productsRegistrationController);
userRouter.get('/', getProductsController);

export default userRouter;