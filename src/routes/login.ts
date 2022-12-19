import { Router } from 'express';
import login from '../controllers/login';
import validateLogin from '../middleware/loginValidation';

const loginRouter = Router();

loginRouter.post('/', validateLogin, login);

export default loginRouter;
