import Router from 'express';
import {
  getAll,
  register } from '../controllers/orders.controllers';

const router = Router();

router
  .get('/', getAll)
  .post('/', register);

export default router;