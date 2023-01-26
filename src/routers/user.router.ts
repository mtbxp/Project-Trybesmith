import { Router } from 'express';
import UsersController from '../controllers/users.controller';
import loginValidation from '../middleware/loginAuth';

const router = Router();

const usersController = new UsersController();

router.post('/users', usersController.create);
router.post('/login', loginValidation, usersController.login);

export default router;
