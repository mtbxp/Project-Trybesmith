import express from 'express';
import { getAll, createProduct } from '../../controllers/products.controller';
import { validateBody, validateInfoBody,
  validateCaracters } from '../middleware/products.middleware';

const router = express.Router();

router.get('/', getAll);

router.post('/', validateBody, validateInfoBody, validateCaracters, createProduct);

export default router;
