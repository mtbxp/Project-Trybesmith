import { Router } from 'express';
import controller from '../controllers/user.controllers';

const router = Router();

router.get('/', controller.getAllUsers);
router.get('/:name', controller.getUserByUsername);
router.post('/', controller.addNewUser);

export default router;