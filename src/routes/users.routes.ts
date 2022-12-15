import { Router } from 'express';
import UserController from '../controllers/user.controller';

const router = Router();

const userController = new UserController();

router.post('/login', userController.login);

router.post('/users', userController.create);

export default router;