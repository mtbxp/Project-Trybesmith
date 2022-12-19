import Router from 'express';
import { 
  registerProduct,
  getAllProducts } from '../controllers/products';

const router = Router();

router
  .put('/', registerProduct)
  .get('/', getAllProducts);

export default router;