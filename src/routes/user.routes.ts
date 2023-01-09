import { Router } from 'express';
import UserController from '../controller/users.controller';

const routerUser = Router();
const userController = new UserController();

routerUser.post('/', userController.userInsert.bind(userController));
export default routerUser;
