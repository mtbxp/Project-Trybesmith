import { Router } from 'express';
import UserController from '../controller/userController';
import validateFields from '../middlewares/validateUsers';

const router = Router();

const userController = new UserController();

router.post('/', validateFields, userController.login);

export default router;