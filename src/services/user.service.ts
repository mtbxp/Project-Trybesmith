import usersModel from '../models/user.model';
import { NewUser } from '../interfaces/user';
import token from '../helpers/token';

const newUser = async (user: NewUser): Promise<string> => {
  const result = await usersModel.newUser(user);
  const userToken = token.generateToken(result);
  return userToken;
};

export default {
  newUser,
};