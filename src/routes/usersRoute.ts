import { Router } from 'express';
import userController from '../controllers/userController';

const routers = Router();

// routers.get('/', productsController.getAllProducts);
routers.post('/', userController.addUser);

export default routers;