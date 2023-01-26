import { Router } from 'express';
import loginController from '../controller/loginController';
import loginValidation from '../middlewares/loginValidation';

const loginRouter = Router();

loginRouter.post('/', loginValidation, loginController.login);

export default loginRouter;