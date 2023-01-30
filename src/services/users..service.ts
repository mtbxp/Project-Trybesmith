import usersModel from '../models/users.model';
import User from '../types/User';

const registerUser = async (user: User) => {
  const newUser = await usersModel.registerUser(user);

  return newUser;
};

const getUsers = async () => {
  const users = await usersModel.getUsers();

  return users;
};

const findUser = async ({ username, password }: User) => {
  const users = await getUsers();

  const findU = users.find((user) => user.username === username && user.password === password);

  return findU;
};

export default {
  registerUser,
  findUser,
};