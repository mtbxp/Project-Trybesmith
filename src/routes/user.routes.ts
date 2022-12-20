import { Router } from 'express';
import UserController from '../controllers/user.controller';
import { 
  validateUsername,
  validateVocation,
  validateLevel,
  validatePassword,
} from '../middlewares/validateUser';

const router = Router();

const userController = new UserController();

router.post(
  '/', 
  validateUsername,
  validateVocation,
  validateLevel,
  validatePassword,
  userController.createUser,
);

export default router;