import { Router } from 'express';
import UsersController from '../controllers/user.controller';
import UsernameMiddleware from '../middleware/username.middleware';
import VocationMiddleware from '../middleware/vocation.middleware';
import LevelMiddleware from '../middleware/level.middleware';
import PasswordMiddleware from '../middleware/password.middleware';

const router = Router();

const userController = new UsersController();
const usernameMiddleware = new UsernameMiddleware();
const vocationMiddleware = new VocationMiddleware();
const levelMiddleware = new LevelMiddleware();
const passwordMiddleware = new PasswordMiddleware();

router.post('/users', usernameMiddleware.username, vocationMiddleware.vocation, levelMiddleware
  .level, passwordMiddleware.password, userController.create);

export default router;