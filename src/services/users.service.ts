import userModel from '../models/users.model';
import { Users } from '../interfaces/interfaces'; 

const registerUser = async (user: Users):Promise<Users> => {
  const newUser = await userModel.registerUser(user);
  return newUser;
};

export default { 
  registerUser,
};