import { Router } from 'express';
import * as controllerUser from '../controllers/user.controllers';
import { newUserValidation } from '../middlewares/validations';

const userRouter = Router();

userRouter.post('/', newUserValidation, controllerUser.addNewUser);

export default userRouter;