import usersModel from '../models/usersModel';
import { User } from '../types';
import jwtToken from '../middlewares/jwtToken';

const createUser = async (user: User): Promise<object> => {
  const result = await usersModel.createUser(user);
  const token = jwtToken.createToken(result);
  return { token };
};

export default {
  createUser,
};