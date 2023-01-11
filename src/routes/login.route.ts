import { Router } from 'express';
import controller from '../controllers/login.controller';
import loginValidation from '../middlewares/loginValidation';

const router = Router();

router.post('/', loginValidation, controller.login);

export default router;