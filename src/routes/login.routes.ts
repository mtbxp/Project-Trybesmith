import { Router } from 'express';
import addLoginUser from '../controllers/login.controller';
import validation from '../middlewares/login.validation';

const router = Router();

router.get('/', validation, addLoginUser);

export default router;