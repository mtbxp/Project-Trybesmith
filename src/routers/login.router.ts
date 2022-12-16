import { Router } from 'express';
import loginUser from '../controllers/login.controller';
import loginValidate from '../middlewares/login.middleware';

const router = Router();

router.post('/', loginValidate, loginUser);

export default router;