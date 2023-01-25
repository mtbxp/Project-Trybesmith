import { Router } from 'express';
import usersController from '../controllers/users.controller';

const router: Router = Router();

router.post('/', usersController.create);

export default router;