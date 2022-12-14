import { Router } from 'express';
import UserController from '../controllers/userController';

const router = Router();

const userCont = new UserController();

router.post('/', userCont.create);

export default router;