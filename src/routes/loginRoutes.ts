import { Router } from 'express';
import loginController from '../controllers/loginController';
import loginMiddlewares from '../middlewares/loginMiddlewares';

const loginRouter = Router();

loginRouter.post(
  '/',
  loginMiddlewares.hasAllFields,
  loginMiddlewares.isLoginValid,
  loginController.validateLogin,
);

export default loginRouter;