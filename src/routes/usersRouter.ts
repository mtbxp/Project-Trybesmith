import { Router } from 'express';

import * as controller from '../controllers/users.controllers';

const router = Router();

router.post('/', controller.postUser);

export default router;