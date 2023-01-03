import { Router } from 'express';

import create from '../controllers/userController';
import { validateUser } from '../middlewares/validateBody';

const router = Router();

router.use(validateUser);
router.post('/', create);

export default router;