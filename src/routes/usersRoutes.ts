import { Router } from 'express';
import usersController from '../controllers/usersController';
import usersMiddlewares from '../middlewares/usersMiddlewares';

const usersRouter = Router();

usersRouter.post(
  '/',
  usersMiddlewares.isUsernameValid,
  usersMiddlewares.isVocationValid,
  usersMiddlewares.isLevelValid,
  usersMiddlewares.isPasswordValid,
  usersController.addUser,
);

export default usersRouter;