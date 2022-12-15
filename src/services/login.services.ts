import { createToken } from '../auth/jsonWebToken';
import { InterfaceLogin } from '../interfaces';
import usersModels from '../models/users.models';

const logIn = async (user: InterfaceLogin) => {
  const userDb = await usersModels.getUser(user);
  
  if (!userDb || userDb.password !== user.password) {
    return { status: 401 as number, message: 'Username or password invalid' };
  }
  
  const token = createToken(userDb);
  delete userDb.password;

  return { status: 200 as number, token, result: userDb };
};

export default {
  logIn,
};
