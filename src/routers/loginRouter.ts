import express from 'express';
import LoginController from '../controllers/loginController';
import Middleware from '../middlewares';
import { loginSchema } from '../middlewares/joi';

const loginRouter = express.Router();

const loginController = new LoginController(); 
const middleware = new Middleware(loginSchema);

loginRouter.post('/', middleware.validatefields, loginController.login);

export default loginRouter;