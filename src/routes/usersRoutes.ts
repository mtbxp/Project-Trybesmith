import { Router } from 'express';
import UsersController from '../controllers/usersController';
import validateBody from '../middlewares/loginValidation';

const router = Router();

const usersControler = new UsersController();

// router.get('/products', usersControler.getAll);
router.post('/users', usersControler.create);
router.post('/login', validateBody, usersControler.login);

export default router;