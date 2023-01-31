import { Router } from 'express';
import LoginController from '../controller/loginController';
import ValidateLogin from '../middlewares/validateLogin';

const router = Router();

const loginController = new LoginController();
const validateLogin = new ValidateLogin();

router.post(
  '/', 
  validateLogin.passwordValidate,
  validateLogin.userNameValidate,
  validateLogin.validateUsernameAndPasswordExists,
  loginController.userLogin,
);

export default router;