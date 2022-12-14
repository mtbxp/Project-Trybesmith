import { Router } from 'express';
import UsersController from '../controllers/user.controller';

const router = Router();

const userController = new UsersController();

router.post('/users', userController.create);

export default router;