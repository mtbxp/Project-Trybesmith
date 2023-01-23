import { Router } from 'express';
import LoginController from '../controllers/loginController';
import validateLogin from '../middlewares/loginValidation';

const router = Router();

const loginController = new LoginController();

router.post('/login', validateLogin, loginController.login);

export default router;
