import express from 'express';
import userController from '../controllers/userController';
import loginMiddleware from '../middlewares/login';

const router = express.Router();

router.post('/', loginMiddleware.loginVerify, userController.login);

export default router;