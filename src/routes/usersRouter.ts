import { Router } from 'express';
import usersController from '../controllers/users.controller';

const router = Router();

router.post('/', usersController.add);

// router.get('/', productsController.getAll);

export default router;