import Router from 'express';
import login from '../controllers/login.controllers';

import validateLogin from '../middlewares/login.middlewares';

const router = Router();

router
  .post('/', validateLogin, login);

export default router;