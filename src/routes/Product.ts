import { Router } from 'express';
import Controller from '../controller';
import Middleware from '../middleware/Products';

const router = Router();
const controller = new Controller.Product();

router.post('/', Middleware.validateProduct, controller.post.bind(controller));
router.get('/', controller.listAll.bind(controller));

export default router;