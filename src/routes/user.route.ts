import { Router } from 'express';
import userController from '../controllers/user.controller';
import validateSignUp from '../middlewares/signup.valid';

const routers = Router();

routers.post('/', validateSignUp, userController.newUser);

export default routers;