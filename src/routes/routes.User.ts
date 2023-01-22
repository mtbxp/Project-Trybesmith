import { Router } from 'express';
import UserController from '../controllers/User.Controller';

const router = Router();

const userController = new UserController();

router.post('/', userController.create);

export default router;