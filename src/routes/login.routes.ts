import { Router } from 'express';

import usersController from '../controllers/users.controller';
import validateLogin from '../middlewares/login.middlewares';

const loginRouter = Router();

loginRouter.post('/', validateLogin, usersController.login);

export default loginRouter;