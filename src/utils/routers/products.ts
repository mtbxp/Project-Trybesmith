import express from 'express';
import { getAll, createProduct } from '../../controllers/products.controller';

const router = express.Router();

router.get('/', getAll);

router.post('/', createProduct);

export default router;
