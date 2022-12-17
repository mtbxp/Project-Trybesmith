import userModel from '../models/users.model';
import { Users } from '../interfaces/interfaces'; 

const registerUser = async (user: Users):Promise<Users> => {
  const newUser = await userModel.registerUser(user);
  return newUser;
};

const getUserByName = async (username: string) => {
  const getUser = await userModel.getUserByName(username);
  return getUser;
};

export default { 
  registerUser,
  getUserByName,
};