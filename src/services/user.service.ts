import model from '../models/user.model';
import { User } from '../types';
import ValidateJWT from '../auth/ValidateJWT';

const getAllUsers = async () => {
  const allUsers = await model.getAllUsers();
  // delete allUsers.password 
  return allUsers;
};

const getUserByUsername = async (name: string) => {
  const user = await model.getUserByUsername(name);
  // delete user.password
  return user;
};

const addNewUser = async (newUser: User) => {
  const user = await model.addNewUser(newUser);
  const token = ValidateJWT(user);
  return token;
};

export default {
  addNewUser,
  getAllUsers,
  getUserByUsername,
};