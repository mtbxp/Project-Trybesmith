import express from 'express';

import productsRoutes from './products.routes';
import usersRoutes from './users.routes';

const router = express.Router();

router.use('/products', productsRoutes);
router.use('/users', usersRoutes);

export default router;
