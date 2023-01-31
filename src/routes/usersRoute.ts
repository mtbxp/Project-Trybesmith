import { Router } from 'express';
import UserController from '../controller/usersController';
import ValidateUsers from '../middlewares/validateUsers';

const router = Router();

const userController = new UserController();
const validateUsers = new ValidateUsers();

router.post(
  '/',
  validateUsers.nameValidated,
  validateUsers.validatedLevel,
  validateUsers.validatedPassword,
  validateUsers.validatedVocation,
  userController.userCreated,
);

export default router;