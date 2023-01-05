import { Router } from 'express';
import usersController from '../controllers/usersController';
import validateUsers from '../middlewares/validateUsers';

const usersRouter = Router();

usersRouter.post('/', validateUsers, (req, res) => usersController(req, res));

export default usersRouter;