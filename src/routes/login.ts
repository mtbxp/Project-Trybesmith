import { Router } from 'express';
import validateLogin from '../middlewares/validateLogin';
import login from '../controllers/login';

const router = Router();

router.post('/login', validateLogin, login);

export default router;