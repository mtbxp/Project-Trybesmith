import { Router } from 'express';
import loginController from '../controller/login.controller';
import validateLogin from '../middlewares/login.middleware';

const loginRoute = Router();

loginRoute.post('/', validateLogin, loginController.userLogin);

export default loginRoute;