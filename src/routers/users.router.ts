import { Router } from 'express';
import insertUsers from '../controllers/users.controller';

const routers = Router();

routers.post('/', insertUsers);

export default routers;