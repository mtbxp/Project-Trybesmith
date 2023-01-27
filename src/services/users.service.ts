import * as usersModel from '../models/users.model';
import { User } from '../types';

const addUser = async (user: User) => {
  const userId = await usersModel.addUser(user);
  return userId;
};

const listAllProducts = async () => {};

export {
  addUser,
  listAllProducts,
};