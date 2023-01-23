import { Router } from 'express';
import usersController from '../controllers/users.controller';

const router = Router();

router.post('/users', usersController.registerUser);

export default router;