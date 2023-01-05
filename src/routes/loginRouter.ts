import { Router } from 'express';
import * as loginController from '../controllers/loginController';
import validateLogin from '../middlewares/validateLogin';

const loginRouter = Router();

loginRouter.post('/', validateLogin, (req, res) => loginController.default(req, res));

export default loginRouter;