import { Router } from 'express';
import { getAllProducts, createANewProduct } from '../Controller/createAnewProduct';
import { createANewPerson, getAllOrders } from '../Controller/usersController';

const router = Router();

router.post('/products', createANewProduct);

router.get('/products', getAllProducts);

router.post('/users', createANewPerson);

router.get('/orders', getAllOrders);

export default router;