import Router from 'express';
import { register, getAll } from '../controllers/products';
import { validateAmount, validateName } from '../middlewares/products';

const router = Router();

router
  .post('/', validateName, validateAmount, register)
  .get('/', getAll);

export default router;