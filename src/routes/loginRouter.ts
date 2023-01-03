import { Router } from 'express';

import * as userController from '../controllers/userController';
import validateLogin from '../middlewares/validateLogin';

const router = Router();

router.use(validateLogin);
router.post('/', userController.login);

export default router;