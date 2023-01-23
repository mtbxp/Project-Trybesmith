import usersModel from '../models/users.model';
import User from '../types/User';

const registerUser = async (user: User) => {
  const newUser = await usersModel.registerUser(user);

  return newUser;
};

export default {
  registerUser,
};