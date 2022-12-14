import jwt from 'jsonwebtoken';
import { secret, config } from '../middlewares/jwtConfig';
import usersModel from '../models/usersModel';
import { Tuser } from '../types/types';

const createUserService = async (user: Tuser) => {
  const payload = await usersModel.createUser(user);
  const token = jwt.sign({ payload }, secret, config);
  const data = { token };
  return { status: 201, data };
};

export default {
  createUserService,
};