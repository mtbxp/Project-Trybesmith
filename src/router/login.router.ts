import { Router } from 'express';
import validate from '../middlewares/login';
import loginControlle from '../controllers/login.controlle';

const loginRouter = Router();

loginRouter.post('/', validate.validateLog, loginControlle.login);

export default loginRouter;
