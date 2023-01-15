import { Router } from 'express';
import usersController from '../controller/usersController';

const router = Router();

router.post('/', usersController.addUserController);

export default router;