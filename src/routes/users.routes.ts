import { Router } from 'express';
import usersControllers from '../controllers/users.controllers';

const usersRouter = Router();

usersRouter.post('/', usersControllers.addUser);

export default usersRouter;
