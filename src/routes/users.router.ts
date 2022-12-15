import { Router } from 'express';
import UsersController from '../controllers/users.controller';

const router = Router();

const usersController = new UsersController();

router.post('/', usersController.registerUser);

export default router;
