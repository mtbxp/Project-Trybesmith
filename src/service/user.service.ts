import userModel from '../models/user.model';
import { Users } from '../interfaces/users';
import createToken from '../auth/token';

const createUser = async ({ username, vocation, level, password }: Users): Promise<string> => {
  const user = await userModel.createUser({ username, vocation, level, password });

  const token = createToken(user);

  return token;
};

export default { createUser };