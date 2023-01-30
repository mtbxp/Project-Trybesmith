import { Router } from 'express';
import {
  validateNameLogin,
  validatePasswordLogin,
} from '../middlewares/validate.login';
import LoginController from '../controllers/login.controller';

const router = Router();

router.post(
  '/login',
  validateNameLogin,
  validatePasswordLogin,
  LoginController,
);

export default router;