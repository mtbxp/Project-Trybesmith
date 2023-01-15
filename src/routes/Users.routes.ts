import { Router } from 'express';
import cadastrarPessoa from '../controller/Users.controller';

const router = Router();

router.post('/', cadastrarPessoa);

export default router;
