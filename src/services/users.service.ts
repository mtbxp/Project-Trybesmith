import { User } from '../interfaces/User';
import usersModel from '../models/users.model';

const addNewUser = async (user: User) => {
  const result = await usersModel.addNewUser(user);

  if (!result.id) return { statusErro: 'NOT_CREATED', response: 'User not Created' };
  return { statusErro: null, response: token };
};

export default {
  addNewUser,
};