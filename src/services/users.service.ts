import { registerNewUserModel } from '../models/users.model';
import { User } from '../interfaces/users.interface';

export const registerNewUserService = async ({
  username,
  vocation,
  level,
  password,
}: User): Promise<User> => {
  const user = await registerNewUserModel({
    username,
    vocation,
    level,
    password,
  });
  return user;
};

export default {
  registerNewUserService,
};
