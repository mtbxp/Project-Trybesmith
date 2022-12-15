import { Router } from 'express';
import Controller from '../controller';
import JWT from '../auth/jwt';
import Middleware from '../middleware/Order';

const jwt = new JWT('secret');

const router = Router();
const controller = new Controller.Order();

router.get('/', controller.listAll.bind(controller));
router.post(
  '/', 
  jwt.verifyToken.bind(jwt),
  Middleware.validateOrder, 
  controller.post.bind(controller),
);

export default router;