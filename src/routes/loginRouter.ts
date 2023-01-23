import { Router } from 'express';
import { makLogin } from '../controller/loginControllers';
import validateLogin from '../middlewares/validateLogin';

const router = Router();

router.post('/', validateLogin, makLogin);

export default router;