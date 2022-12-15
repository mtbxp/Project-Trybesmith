import { Router } from 'express';
import addLoginUser from '../controllers/login.controller';
import validation from '../middlewares/login.validation';

const router = Router();

router.post('/', validation, addLoginUser);

export default router;