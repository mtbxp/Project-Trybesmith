import { Router } from 'express';
import createUserController from '../controller/users.controller';

const userRoute = Router();

userRoute.post('/', createUserController.createUser);

export default userRoute;