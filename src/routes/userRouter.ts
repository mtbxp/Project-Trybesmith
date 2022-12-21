import { Router } from 'express';
import * as userController from '../controllers/userController';
import { 
  validateUser,
  validateVocation,
  validateLevel,
  validatePassword,
} from '../midlleware/validateUser';

const userRouter = Router();

userRouter.post(
  '/', 
  validateUser, 
  validateVocation, 
  validateLevel, 
  validatePassword,
  userController.insertUser,
);
export default userRouter;