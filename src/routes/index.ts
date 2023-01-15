import express from 'express';

import productsRoutes from './products.routes';
import usersRoutes from './users.routes';
import loginRoutes from './login.routes';

const router = express.Router();

router.use('/products', productsRoutes);
router.use('/users', usersRoutes);
router.use('/login', loginRoutes);

export default router;
