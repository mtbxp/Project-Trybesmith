import { Router } from 'express';
import usersController from '../controllers/users.controller';
import { 
  validateLevel, 
  validateVocation, 
  validatePassword, 
  validateUsername, 
} from '../middlewares/validateUsers';

const router = Router();

router.post(
  '/users', 
  validateUsername, 
  validateVocation, 
  validateLevel, 
  validatePassword, 
  usersController.registerUser,
);

export default router;