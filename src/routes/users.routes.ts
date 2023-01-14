import { Router } from 'express';
import usersController from '../controllers/users.controller';

const router = Router();

router.post('/', usersController.registerUser);
router.get('/', usersController.findAllUsers);

export default router;