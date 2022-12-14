import { Router } from 'express';
import loginController from '../controllers/login.controller';
import loginValidation from '../middleware/loginAutentication';

const router = Router();

router.post('/', loginValidation, loginController.login);

export default router;