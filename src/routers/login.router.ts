import { Router } from 'express';
import usersController from '../controllers/users.controller';
import validateLogin from '../middlewares/login.validations';

const loginRouter = Router();

loginRouter.post('/', validateLogin, usersController.logIn);

export default loginRouter;
