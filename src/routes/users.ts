import express from 'express';
import usersController from '../controllers/users.controller';

const route = express.Router();

route.post('/', usersController.create);

export default route;