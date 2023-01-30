import { Router } from 'express';
import UserController from '../controllers/users.controller';
import { 
  levelUsersValidate,
  passwordlUsersValidate,
  usernameUsersValidate,
  vocationUsersValidate,
} from '../middlewares/validate.users';

const router = Router();

const userController = new UserController();

// USER
router.post(
  '/',
  usernameUsersValidate,
  vocationUsersValidate,
  passwordlUsersValidate,
  levelUsersValidate,
  userController.create,
);

export default router;
