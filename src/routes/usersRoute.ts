import { Router } from 'express';
import UserController from '../controller/usersController';

const router = Router();

const userController = new UserController();

router.post('/', userController.userCreated);

export default router;