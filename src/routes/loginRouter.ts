import { Router } from 'express';
import loginController from '../controllers/login.controller';
import loginMiddlewares from '../middlewares/login.middleware';

const router = Router();

router.post(
  '/',
  loginMiddlewares.usernameValidation,
  loginMiddlewares.passwordValidation,
  loginController.login,
);

export default router;