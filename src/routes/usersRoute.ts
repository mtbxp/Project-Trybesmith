import { Router } from 'express';
import * as usersController from '../controllers/usersController';
import validateUsers from '../middlewares/usersMiddleware';

const router = Router();

router.post('/', validateUsers, usersController.insert);

export default router;