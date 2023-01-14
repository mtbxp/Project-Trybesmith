import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import validateBody from '../middlewares/login.middleware';

const orderRouter = Router();

const loginController = new LoginController();

orderRouter.get('/', validateBody, loginController.validateLoginUser.bind(loginController));

export default orderRouter;