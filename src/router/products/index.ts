import express = require('express');
import { insertProductController, getAllProductsController } from '../../controllers/products';

const router = express.Router();

router.post('/products', insertProductController);
router.get('/products', getAllProductsController);

export default router;