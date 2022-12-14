import { Router } from 'express';
import Controller from '../controller';

const router = Router();
const controller = new Controller.User();

router.post('/', controller.post.bind(controller));

export default router;