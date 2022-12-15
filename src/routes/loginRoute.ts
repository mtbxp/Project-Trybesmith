import { Router } from 'express';
import * as loginController from '../controllers/loginController';
import loginMiddleware from '../middlewares/loginMiddleware';

const router = Router();

router.post('/', loginMiddleware, loginController.login);

export default router;