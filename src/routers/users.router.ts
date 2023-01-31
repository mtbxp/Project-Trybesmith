import { Router } from 'express';
import usersController from '../controllers/users.controller';
import validateUsers from '../middlewares/users.validations';

const usersRouter = Router();

usersRouter.post('/', validateUsers, usersController.createUser);

export default usersRouter;
