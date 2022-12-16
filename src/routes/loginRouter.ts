import { Router } from 'express';
import * as usersController from '../controllers/user.controller';
import { validateLogin } from '../middlewares/validations';

const loginRouter = Router();

loginRouter.post('/', validateLogin, usersController.login);

export default loginRouter;