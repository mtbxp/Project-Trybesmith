import { Router } from 'express';
import UsersController from '../controllers/users.controller';
import loginValidation from '../middleware/loginAuth';
import UserValidation from '../middleware/userValidation';

const router = Router();

const usersController = new UsersController();

router.post(
  '/users', 
  UserValidation.usernameValidation,
  UserValidation.vocationValidation,
  UserValidation.levelValidation,
  UserValidation.passwordValidation,
  usersController.create,
);
router.post('/login', loginValidation, usersController.login);

export default router;
