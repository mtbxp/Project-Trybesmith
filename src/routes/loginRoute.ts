import { Router } from 'express';
import loginController from '../controllers/loginController';
import validateLogin from '../middlewares/validateLogin';

const routers = Router();

routers.post('/', validateLogin, loginController.logUserIn);

export default routers;