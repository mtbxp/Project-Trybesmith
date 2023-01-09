import { Router } from 'express';
import usersController from '../controllers/usersController';
import authMiddleware from '../middlewares/authMiddleware';

const loginRouter = Router();

loginRouter.post('/', authMiddleware, usersController.login);

export default loginRouter;