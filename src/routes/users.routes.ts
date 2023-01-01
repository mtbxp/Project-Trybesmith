import { Router } from 'express';
import userController from '../controllers/user.controller';

const routers = Router();

routers.get('/', userController.getAllUsersController);

routers.post('/', userController.createUserController);

export default routers;
