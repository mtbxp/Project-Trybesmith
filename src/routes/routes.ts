import express from 'express';
import productsController from '../controller/products.controller';
import usersController from '../controller/users.controller';

const router = express.Router();

router.post('/products', productsController.createProductController);

router.get('/products', productsController.getAllProductsController);

router.post('/users', usersController.createUserController);

export default router;