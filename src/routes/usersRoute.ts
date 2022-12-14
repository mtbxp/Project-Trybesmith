import { Router } from 'express';
import userController from '../controllers/userController';

const routers = Router();

routers.post('/', userController.addUser);

export default routers;