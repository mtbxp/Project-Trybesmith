import usersModel from '../models/users.model';
import User from '../interfaces/user.interface';

const registerUser = async (user: User) => {
  const insert = await usersModel.registerUser(user);
  return insert;
};

export default {
  registerUser,
};