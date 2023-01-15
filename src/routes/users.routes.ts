import { Router } from 'express';
import usersController from '../controllers/users.controller';
import usersMiddlewares from '../middlewares/users.middlewares';

const router = Router();

router.post(
  '/',
  usersMiddlewares.validateUsername,
  usersMiddlewares.validateVocation,
  usersMiddlewares.validateLevel,
  usersMiddlewares.validatePassword,
  usersController.registerUser,
);
router.get('/', usersController.findAllUsers);

export default router;