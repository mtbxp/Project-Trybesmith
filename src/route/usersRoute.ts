import { Router } from 'express';
import UserController from '../controller/users.controller';

const route = Router();
const usersController = new UserController();

route.post('/', usersController.addUsers.bind(usersController));

export default route;