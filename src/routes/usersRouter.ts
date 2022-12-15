import { Router } from 'express';
import * as usersController from '../controllers/user.controller';
import { validateNewUser } from '../middlewares/validations';

const usersRouter = Router();

usersRouter.post('/', validateNewUser, usersController.createUser);

export default usersRouter;