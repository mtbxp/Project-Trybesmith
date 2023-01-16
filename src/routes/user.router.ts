// ./src/routes/user.router.ts

import { Router } from 'express';
import UserController from '../controllers/user.controller';

const router = Router();

const userCont = new UserController();

router.post('/', userCont.create);

export default router;
