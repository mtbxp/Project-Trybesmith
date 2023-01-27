import { Router } from 'express';
import usersController from '../controllers/users.controller';
import validateUsers from '../middlewares/validateUsers.middlewares';

const router: Router = Router();

router.post(
  '/',
  validateUsers.validateUsername,
  validateUsers.validateVocation,
  validateUsers.validateLevel,
  validateUsers.validatePassword,
  usersController.create,
);

export default router;