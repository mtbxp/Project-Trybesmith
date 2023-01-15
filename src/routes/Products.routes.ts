import { Router } from 'express';
import { ProdutosInsert, ProdutosGet } from '../controller/Products.controller';

const router = Router();

router.post('/', ProdutosInsert);
router.get('/', ProdutosGet);

export default router;