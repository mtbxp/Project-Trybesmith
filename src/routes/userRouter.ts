import { Router } from 'express';
import * as UserController from '../controller/userController';

const router = Router();

router.post('/', UserController.createUser);
router.get('/', UserController.getAllUsers);

export default router;