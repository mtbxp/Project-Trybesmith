import { Router } from 'express';
import UserController from '../controller/user.controller';

const usersRouter = Router();

const userController = new UserController();

usersRouter.post('/', userController.registerUser.bind(userController));
// usersRouter.get('/', productController.getAllProducts.bind(productController));

export default usersRouter;