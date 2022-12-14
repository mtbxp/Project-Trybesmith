import { Router } from 'express';
import Controller from '../controller';

const router = Router();
const controller = new Controller.Order();

router.get('/', controller.listAll.bind(controller));

export default router;