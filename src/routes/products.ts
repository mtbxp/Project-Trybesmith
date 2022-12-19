import Router from 'express';
import { 
  register,
  getAll } from '../controllers/products.controllers';
import {
  validateName,
  validateAmount } from '../middlewares/products.middlewares';

const router = Router();

router
  .post('/', validateName, validateAmount, register)
  .get('/', getAll);

export default router;