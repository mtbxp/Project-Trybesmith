import { Router } from 'express';
import createNewUser from '../controllers/user.controller';
import validation from '../middlewares/user.validation';

const router = Router();

router.post('/', validation, createNewUser);

export default router;