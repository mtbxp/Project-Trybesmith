import { Router } from 'express';
import create from '../Controller/userController';

const router = Router();

router.post('/', create);

export default router;
