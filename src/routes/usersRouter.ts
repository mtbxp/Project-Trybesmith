import { Router } from 'express';
import usersController from '../controllers/usersController';

const usersRouter = Router();

usersRouter.post('/', (req, res) => usersController(req, res));

export default usersRouter;