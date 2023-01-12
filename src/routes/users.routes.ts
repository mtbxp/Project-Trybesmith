import { Router } from 'express';
import UserController from '../controller/users.controller';

const router = Router();

const user = new UserController();

router.post('/', user.insert);

export default router;