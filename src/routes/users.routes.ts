import { Router } from 'express';
import userController from '../controllers/user.controller';

const routerUsers = Router();

routerUsers.post('/', userController.createUser);

export default routerUsers;