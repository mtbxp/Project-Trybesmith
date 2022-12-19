import usersModel from '../models/users.model';
import User from '../types/User';

const registerUser = async (user: User) => {
  const registeredUser = await usersModel.registerUser(user);
  return registeredUser;
};

const getAllUsers = async () => {
  const users = await usersModel.getAllUsers();
  console.log(users.find((u) => u.username === 'reigal'));
  return users;
};

const getUserByUsername = async ({ username, password }: User) => {
  const users = await usersModel.getAllUsers();
  const usersArr = users.find((u) => u.password === password && u.username === username);
  return usersArr;
};

export default {
  registerUser,
  getAllUsers,
  getUserByUsername,
};
