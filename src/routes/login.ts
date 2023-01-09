import Router from 'express';
import login from '../controllers/login';

import validateLogin from '../middlewares/login';

const router = Router();

router
  .post('/', validateLogin, login);

export default router;