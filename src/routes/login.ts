import Router from 'express';
import login from '../controllers/login';

import validateLogin from '../middlewares/login';
import { validatePassword } from '../middlewares/users';

const router = Router();

router
  .post('/', validateLogin, validatePassword, login);

export default router;