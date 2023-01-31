import { Router } from 'express';
import loginController from '../controllers/login.controller';
import validateLogin from '../middlewares/login.valid';

const routers = Router();

routers.post('/', validateLogin, loginController.login);

export default routers;