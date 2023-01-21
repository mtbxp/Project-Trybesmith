import { Router } from 'express';

import userController from '../controllers/user.controller';
import validateUsersField from '../middlewares/validateUsersField';

const router: Router = Router();

router.post('/', validateUsersField, userController.create);

export default router;
