import { Router } from 'express';
import * as userController from '../Controller/userController';

const router = Router();

router.post('/', userController.create);

export default router;
