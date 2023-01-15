import { Router } from 'express';
import { ProdutosInsert } from '../controller/produtos.controller';

const router = Router();

router.post('/', ProdutosInsert);

export default router;