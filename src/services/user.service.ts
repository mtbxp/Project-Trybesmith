import { generateToken } from '../auth/tokenJWT';
import { UserParameters } from '../interfaces/user.interface';
import userModel from '../models/user.model';

const createUserService = async (user: UserParameters) => {
  const newUser = await userModel.createUserModel(user);
  const userToken = generateToken(newUser);
  return userToken;
};

const getAllUsersService = async () => {
  const allUsers = await userModel.getAllUsersModel();
  return allUsers;
};

export default {
  createUserService,
  getAllUsersService,
};
