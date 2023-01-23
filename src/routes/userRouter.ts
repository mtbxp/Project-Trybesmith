import { Router } from 'express';
import * as UserController from '../controller/userController';
import validateUsername from '../middlewares/validateUser';
import validateVocation from '../middlewares/validateVocation';
import validateLevel from '../middlewares/validateLevel';
import validatePassword from '../middlewares/validatePassword';

const router = Router();

router.post(
  '/',
  validateUsername, 
  validateVocation, 
  validateLevel, 
  validatePassword, 
  UserController.createUser,
);
router.get('/', UserController.getAllUsers);

export default router;