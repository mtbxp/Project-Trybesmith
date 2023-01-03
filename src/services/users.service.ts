import { createToken } from '../auth/token';
import usersModel from '../models/users.model';
import { Credentials, NewUser } from '../types';
import HttpError from '../utils/errors';

export default {
  createUser: async (user: NewUser): Promise<{ token: string }> => {
    const id = await usersModel.insert(user);
    const token = createToken({ id });

    return { token };
  },

  login: async ({ username, password }: Credentials): Promise<{ token: string }> => {
    const user = await usersModel.findByName(username);
    
    if (!user || user.password !== password) {
      throw new HttpError(401, 'Username or password invalid');
    }

    return { token: createToken({ id: user.id }) };
  },
};