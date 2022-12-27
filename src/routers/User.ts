import { Router } from 'express';
import UserController from '../controllers/user.controller';

const routerUser = Router();

const userController = new UserController();

// routerProduct.get('/', productsController.getAllProducts);
routerUser.post('/', userController.registerUser);

export default routerUser;