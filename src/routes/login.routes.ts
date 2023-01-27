import { Router } from 'express';
import loginController from '../controllers/login.controller';
import validateLogin from '../middlewares/validateLogin.middlewares';

const router: Router = Router();

router.post('/', validateLogin, loginController.login);

export default router;