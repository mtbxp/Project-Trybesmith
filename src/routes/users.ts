import express from 'express';
import usersController from '../controllers/users.controller';
import loginValidation from '../middlewares/loginValidation';
import userValidation from '../middlewares/userValidation';

const route = express.Router();

route.post('/login', loginValidation, usersController.login);

route.post('/users', userValidation.newUserValidation, usersController.create);

export default route;