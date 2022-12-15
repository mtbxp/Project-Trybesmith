import { Router } from 'express';

import UserController from '../controllers/user.controller';

const usersRouter = Router();

const userControllers = new UserController();

usersRouter.post('/', userControllers.createUser.bind(userControllers));

export default usersRouter;