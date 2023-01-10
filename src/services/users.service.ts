import { createToken } from '../JWT/config';
import usersModel from '../models/users.model';
import { User } from '../types';

export default {
  login: async (user: User) => {
    const result = await usersModel.login(user);

    if (!result) {
      return { err: { statusCode: 401 }, output: { message: 'Username or password invalid' } };
    }

    const token = createToken(result.id);

    return { err: null, output: { token } };
  },

  create: async (user: User) => {
    const result = await usersModel.create(user);
    const token = createToken(result.insertId);

    return { err: null, output: token };
  },
};