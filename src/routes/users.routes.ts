import { Router } from 'express';
import usersControllers from '../controllers/users.controllers';
import validationUser from '../middlewares/validationUser';

const usersRouter = Router();
usersRouter.post('/', validationUser, usersControllers.addUser);

export default usersRouter;
