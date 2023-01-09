import { Router } from 'express';
import * as controllerUser from '../controllers/user.controllers';
import { loginValidation } from '../middlewares/validations';

const loginRouter = Router();

loginRouter.post('/', loginValidation, controllerUser.userLogin);

export default loginRouter;