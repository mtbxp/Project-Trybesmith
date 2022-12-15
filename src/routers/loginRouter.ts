import express from 'express';
import LoginController from '../controllers/loginController';
import loginMiddleware from '../middlewares';

const loginRouter = express.Router();

const loginController = new LoginController(); 

loginRouter.post('/', loginMiddleware, loginController.login);

export default loginRouter;