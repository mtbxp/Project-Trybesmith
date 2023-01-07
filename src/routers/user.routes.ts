import { Router } from 'express';
import userControllers from '../controllers/userControllers';

const router = Router();

router.post('/', userControllers.userAdd);

export default router;