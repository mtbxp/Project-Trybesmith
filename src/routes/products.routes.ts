import express from 'express';

import productsController from '../controller/products.controller';

const router = express.Router();

router.post('/', productsController.insert);

export default router;