import express from 'express';
import controller from '../controller/products.controller';

const router = express.Router();

router.post('/products', controller.createProductController);

export default router;