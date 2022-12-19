import usersModel from '../models/users.model';
import User from '../types/User';

const registerUser = async (user: User) => {
  const registeredUser = await usersModel.registerUser(user);
  return registeredUser;
};

export default {
  registerUser,
};
