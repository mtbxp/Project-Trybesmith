import { Router } from 'express';
import UserController from '../controllers/user.controller';
import UserMiddleware from '../middlewares/user.middleware';

const router = Router();

const userController = new UserController();

router.post('/login', UserMiddleware.validateLogin, userController.findByUsername);
router.post('/users', userController.create);

export default router;
