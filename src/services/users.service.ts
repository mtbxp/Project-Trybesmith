import { createToken } from '../JWT/config';
import usersModel from '../models/users.model';
import { User } from '../types';

export default {
  create: async (user: User) => {
    const result = await usersModel.create(user);

    const token = createToken(result.insertId);

    return { err: null, output: token };
  },
};