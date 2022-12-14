import { Router } from 'express';
import UsersController from '../controllers/users.controller';

const router = Router();

const usersControllers = new UsersController();

router.post('/users', usersControllers.createUser);

export default router;
