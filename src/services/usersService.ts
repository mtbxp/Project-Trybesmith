import usersModel from '../models/usersModel';
import { Users } from '../types/User';
import newToken from '../authentication/jwtAuth';

const addUser = async (user: Users) => {
  const addedUser = await usersModel.addUser(user);
  const generateToken = await newToken(addedUser);
  return generateToken;
};

export default {
  addUser,
};