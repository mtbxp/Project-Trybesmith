import { Router } from 'express';

import userController from '../controllers/user.controller';
import validateUsersField from '../middlewares/validateUserField';

const router: Router = Router();

router.post('/', validateUsersField, userController.create);

export default router;
