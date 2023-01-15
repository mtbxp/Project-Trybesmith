import { Router } from 'express';
import loginController from '../controller/loginController';
import loginMiddleware from '../middleware/loginMiddleware';

const router = Router();

router.post(
  '/',
  loginMiddleware.userValidation,
  loginMiddleware.passwordValidation,
  loginController.loginController,
);

export default router;