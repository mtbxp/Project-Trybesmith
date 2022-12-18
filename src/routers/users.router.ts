import { Router } from 'express';
import insertUsers from '../controllers/users.controller';
import userValidate from '../middlewares/users.middleware';

const routers = Router();

routers.post('/', userValidate, insertUsers);

export default routers;