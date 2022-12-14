import { Router } from 'express';

import * as controller from '../controllers/products.controllers';

const router = Router();

router.post('/', controller.postProducts);

export default router;