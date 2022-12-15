import { Router } from 'express';
import usersController from '../controllers/controller.users';

const router = Router();

router.post('/', usersController.userRegistration);

export default router;