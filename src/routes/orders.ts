import Router from 'express';
import {
  getAll,
  register } from '../controllers/orders.controllers';
import validateToken from '../middlewares/validateToken';
import validateOrder from '../middlewares/orders.middlewares';

const router = Router();

router
  .get('/', getAll)
  .post('/', validateToken, validateOrder, register);

export default router;