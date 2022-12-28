import express from 'express';
import registerNewUser from '../controllers/user.controller';

const usersRouter = express.Router();

export default usersRouter
  .post('/users', registerNewUser);