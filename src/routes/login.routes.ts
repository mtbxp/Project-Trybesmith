import { Router } from 'express';
import login from '../controllers/login.controller';
import loginMiddleware from '../middlewares/login.middleware';

const router = Router();

router.post(
  '/',
  loginMiddleware.validatePassword,
  loginMiddleware.validateUsername,
  login,
);

export default router;