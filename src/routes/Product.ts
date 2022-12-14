import { Router } from 'express';
import Controller from '../controller';

const router = Router();
const controller = new Controller.Product();

router.post('/', controller.post.bind(controller));
router.get('/', controller.listAll.bind(controller));

export default router;