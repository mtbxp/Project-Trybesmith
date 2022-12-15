import { Router } from 'express';
import Controller from '../controller';
import Middleware from '../middleware/User';

const router = Router();
const controller = new Controller.User();

router.post('/', Middleware.validateUser, controller.post.bind(controller));

export default router;