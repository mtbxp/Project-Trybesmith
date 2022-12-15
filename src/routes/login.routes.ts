import { Router } from 'express';
import loginControllers from '../controllers/login.controllers';
import validationLogin from '../middlewares/validationLogin';

const loginRouter = Router();
loginRouter.post('/', validationLogin, loginControllers.logIn);

export default loginRouter;
