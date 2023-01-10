import express from 'express';
import productController from '../controllers/products.controller';

const route = express.Router();

route.get('/', productController.findAll);
route.post('/', productController.create);

export default route;