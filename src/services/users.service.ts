import userModel from '../models/users.model';
import { User } from '../interfaces/users.interface';
import createToken from '../auth/token';

const registerNewUserService = async ({
  username,
  vocation,
  level,
  password,
}: User): Promise<string> => {
  const user = await userModel.registerNewUserModel({
    username,
    vocation,
    level,
    password,
  });

  delete user.password;

  const newToken = createToken(user);
  return newToken;
};

// const searchUsername = async (username: User) => {
//   const user = await userModel.searchUsername(username);

//   const userToObject = user.find((item) => item);
  
//   return userToObject;
// };

const getAllUsers = async () => {
  const allUsers = await userModel.getAllUsers();
  return allUsers;
};

const checkUserPass = async ({ username, password }: User) => {
  const users = await userModel.getAllUsers();
  const userReturn = users.find((user) => user.password === password && user.username === username);

  return userReturn;
};

export default {
  registerNewUserService,
  // searchUsername,
  getAllUsers,
  checkUserPass,
};
