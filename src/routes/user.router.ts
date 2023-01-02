import express from 'express';
import { loginUser, registerNewUser } from '../controllers/user.controller';
import { validLoggingUser, validNewUser } from '../middlewares/validUser';

const usersRouter = express.Router();

export default usersRouter
  .post('/login', validLoggingUser, loginUser)
  .post('/users', validNewUser, registerNewUser);