import { Router } from 'express';
import { userController } from '../msc';

const userRoutes = Router();

userRoutes.post('/', userController.create);

export default userRoutes;
