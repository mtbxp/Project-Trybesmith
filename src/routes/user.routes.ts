import { Router } from 'express';
import createUserController from '../controller/users.controller';
import validateUser from '../middlewares/users.middleware';

const userRoute = Router();

userRoute.post('/', validateUser, createUserController.createUser);

export default userRoute;