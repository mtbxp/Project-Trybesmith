import express from 'express';
import usersController from '../controllers/users.controller';
import loginValidation from '../middlewares/loginValidation';

const route = express.Router();

route.post('/login', loginValidation, usersController.login);

route.post('/users', usersController.create);

export default route;