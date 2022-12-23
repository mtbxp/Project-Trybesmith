import express from 'express';
import LoginController from '../controllers/login.controller';
import validateLogin from '../middlewares';

const router = express.Router();

const loginController = new LoginController();

router.post(
  '/', 
  validateLogin,
  (req, res) => loginController.checkUser(req, res),
);

export default router;