import usersModel from '../models/users.model';
import User from '../interfaces/user.interface';
import token from '../middlewares/generateToken';

const registerUser = async (user: User): Promise<string> => {
  const userId = await usersModel.registerUser(user);
  
  const newUser = {
    id: userId,
    username: user.username,
    vocation: user.vocation,
    level: user.level,
  };

  const userToken = token(newUser);

  return userToken;
};

const findAllUsers = async () => {
  const users = await usersModel.findAllUsers();  
  return users;
};

export default {
  registerUser,
  findAllUsers,
};