import { Router } from 'express';
import loginController from '../controllers/login.controller';
import validateLogin from '../middlewares/loginValidate';

const loginRouter = Router();

loginRouter.post('/', validateLogin, loginController.userLogin);

export default loginRouter;