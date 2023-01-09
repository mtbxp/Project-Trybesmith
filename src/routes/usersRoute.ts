import { Router } from 'express';
import UsersController from '../controllers/usersController';

const usersRouter = Router();

const uController = new UsersController();

usersRouter.post('/', uController.create);

export default usersRouter;
