import { Router } from 'express';
import Controller from '../controller';
import Login from '../middleware/Login';

const router = Router();
const controller = new Controller.Login();

router.post('/', Login.validateLogin, controller.login.bind(controller));

export default router;