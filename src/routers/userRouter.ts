import { Router } from 'express';
import UserController from '../controllers/userController';
import validateUser from '../middlewares/userValidation';

const router = Router();

const userController = new UserController();

router.post('/users', validateUser, userController.create);

export default router;
