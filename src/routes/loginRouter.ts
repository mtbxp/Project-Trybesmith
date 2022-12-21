import { Router } from 'express';
import { login } from '../controllers/loginController';
import authLogin from '../midlleware/authLogin';

const loginRouter = Router();

loginRouter.post('/', authLogin, login);

export default loginRouter;