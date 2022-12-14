import { InterfaceUser } from '../interfaces';
import usersModels from '../models/users.models';
import { createToken } from '../auth/jsonWebToken';

const addUser = async (user: InterfaceUser) => {
  const newUser = await usersModels.addUser(user);
  const token = createToken(newUser);
  console.log(token);
  
  return { status: 201, result: newUser, token };
};

export default {
  addUser,
};
