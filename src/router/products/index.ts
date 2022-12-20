import express = require('express');
import insertProductController from '../../controllers/products';

const router = express.Router();

router.post('/products', insertProductController);

export default router;