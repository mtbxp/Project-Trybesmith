import express from 'express';
import usersController from '../controllers/users.controller';
import userValidations from '../middlewares/userValidations';

const router = express.Router();

router.post('/users', usersController.createUser);

router.post('/login', userValidations.validateLogin, usersController.login);

export default router;