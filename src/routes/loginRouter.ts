import { Router } from 'express';
import loginController from '../controllers/loginController';
import loginValidate from '../middlewares/loginValidations';

const router = Router();

router.post('/login', loginValidate, loginController.userLogin);

export default router;