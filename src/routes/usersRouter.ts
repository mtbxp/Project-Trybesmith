import { Router } from 'express';
import * as usersController from '../controllers/user.controller';

const usersRouter = Router();

usersRouter.post('/', usersController.createUser);

export default usersRouter;