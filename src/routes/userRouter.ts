import { Router } from 'express';
import * as UserControllers from '../controller/userController';

const router = Router();

router.get('/', UserControllers.getAll);

export default router;