import { Router } from 'express';
import usersController from '../controllers/usersController';
import { levelValidate, passwordValidate, usernameValidate,
  vocationValidate } from '../middlewares/usersValidations';

const router = Router();

router.post(
  '/users',
  usernameValidate,
  vocationValidate,
  levelValidate,
  passwordValidate,
  usersController.createUser,
);

export default router;