import { Router } from 'express';
import userController from '../controllers/user.controllers';

const routers = Router();

routers.post('/', userController.addUser);

export default routers;