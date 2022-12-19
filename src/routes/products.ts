import Router from 'express';
import { 
  register,
  getAll } from '../controllers/products.controllers';

const router = Router();

router
  .put('/', register)
  .get('/', getAll);

export default router;