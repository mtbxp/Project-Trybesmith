import Router from 'express';
import { 
  register,
  getAll } from '../controllers/products.controllers';

const router = Router();

router
  .post('/', register)
  .get('/', getAll);

export default router;