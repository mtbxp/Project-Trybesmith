import express from 'express';
import UserController from '../controllers/userController';

const userRouter = express.Router();

const userController = new UserController();

userRouter.post('/', userController.create);

// productsRouter.get('/', userController.getAll);

export default userRouter;