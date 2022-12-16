import userModel from '../models/users.model';
import { User } from '../interfaces/users.interface';
import token from '../auth/token';

export const registerNewUserService = async ({
  username,
  vocation,
  level,
  password,
}: User): Promise<string> => {
  const user = await userModel.registerNewUserModel({
    username,
    vocation,
    level,
    password,
  });

  delete user.password;

  const newToken = token.createToken(user);
  return newToken;
};

export const userLoginService = async ({
  username,
  password,
}: {
  username: string,
  password: string,
}) => {
  const [login] = await userModel.userLoginModel(username);

  if (!login) {
    throw new Error();
  }

  if (password !== login.password) {
    throw new Error();
  }

  delete login.password;

  const newToken = token.createToken(login);
  return newToken;
};
