import express from 'express';
import { loginUser, registerNewUser } from '../controllers/user.controller';

const usersRouter = express.Router();

export default usersRouter
  .post('/login', loginUser)
  .post('/users', registerNewUser);