import { Router } from 'express';

import odersController from '../controller/Orders.controller';

const router = Router();

router.get('/', odersController);

export default router;