import { Router } from 'express';
import usersController from '../controllers/users.controller';
import { 
  levelValidation,
  passwordValidation,
  usernameValidation,
  vocationValidation,
} from '../middleware/validateUser';

const router = Router();

router.post(
  '/', 
  usernameValidation,
  vocationValidation,
  levelValidation,
  passwordValidation,
  usersController.create,
);

export default router;