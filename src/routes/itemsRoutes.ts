import { Router } from 'express';
import ItemsController from '../controllers/itemController';

const router = Router();

const itemsControler = new ItemsController();

router.post('/products', itemsControler.create);

export default router;