import { Router } from 'express';
import UserController from '../controller/userController';

const routerUser = Router();
const controller = new UserController();

routerUser.post('/users', (req, res) => controller.addUser(req, res));
export default routerUser;