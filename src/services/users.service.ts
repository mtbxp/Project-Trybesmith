import { createToken } from '../auth/token';
import usersModel from '../models/users.model';
import { NewUser } from '../types';

export default {
  createUser: async (user: NewUser): Promise<{ token: string }> => {
    const id = await usersModel.insert(user);
    const token = createToken({ id });

    return { token };
  },
};