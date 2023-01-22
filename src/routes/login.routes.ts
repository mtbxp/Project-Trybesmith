import { Router } from 'express';
import UserController from '../controllers/users.controller';
import validationFields from '../middlewares/validateLogin';

const router = Router();

const userController = new UserController();

router.post('/', validationFields, userController.getByUsername);

export default router;