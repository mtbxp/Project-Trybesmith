import express from 'express';
import userController from '../controllers/userController';
import { userRequired, userFormat } from '../middlewares/userMiddleware';

const router = express.Router();

router.post('/', userRequired, userFormat, userController.registerUser);

export default router;