import express from 'express';
import doLogin from '../../controllers/login.controller';
import { validateBody } from '../middleware/loginValidations';

const router = express.Router();

router.post('/', validateBody, doLogin);

export default router;