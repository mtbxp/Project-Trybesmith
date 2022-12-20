import express = require('express');
import getAllOrdersController from '../../controllers/orders';

const router = express.Router();

router.get('/orders', getAllOrdersController);

export default router;