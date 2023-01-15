import { Router } from 'express';

import validate from '../middlewares';
import LoginController from '../controller/login.controller';

const login = new LoginController();

const router = Router();

router.post('/', validate.passwordValidate, validate.usernameValidate, login.login);

export default router;
