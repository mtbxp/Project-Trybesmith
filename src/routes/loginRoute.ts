import { Router } from 'express';
import * as loginController from '../controllers/loginController';
import loginNotFound from '../middlewares/loginNotFound';

const routerlogin = Router();

routerlogin.post('/', loginNotFound, loginController.login);

export default routerlogin;