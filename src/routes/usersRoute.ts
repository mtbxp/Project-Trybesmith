import { Router } from 'express';
import userController from '../controllers/userController';
import validateSignUp from '../middlewares/validateSignUp';

const routers = Router();

routers.post('/', validateSignUp, userController.addUser);

export default routers;