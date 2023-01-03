import { Router } from 'express';
import usersController from '../controllers/users.controller';

const router = Router();

// router.get('/', productController.getAllProducts);
router.post('/', usersController.createUser);
export default router;