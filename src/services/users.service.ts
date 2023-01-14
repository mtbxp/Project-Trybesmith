import { User } from '../interfaces/User';
import usersModel from '../models/users.model';
import jwt from '../auth/jwt';

const addNewUser = async (user: User) => {
  const result = await usersModel.addNewUser(user);
  console.log('log service');
  console.log(result);
  if (!result.id) return { statusErro: 'NOT_CREATED', response: 'User not Created' };
  const token = jwt.generateToken(result);
  return { statusErro: null, response: token };
};

export default {
  addNewUser,
};