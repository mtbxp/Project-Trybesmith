import { Router } from 'express';
import UsersController from '../controllers/usersController';

const router = Router();

const usersControler = new UsersController();

// router.get('/products', usersControler.getAll);
router.post('/users', usersControler.create);

export default router;