import express from 'express';
import productController from '../controllers/products.controller';
import productsValidation from '../middlewares/productsValidation';

const route = express.Router();

route.get('/', productController.findAll);
route.post('/', productsValidation.newProductValidation, productController.create);

export default route;