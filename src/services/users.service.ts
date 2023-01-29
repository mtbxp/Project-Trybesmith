import usersModel from '../models/users.model';
import { TUsers } from '../types';
import createToken from '../auth/jwtFunctions';

const createUser = async (userInfo: TUsers) => {
  const createdUser = await usersModel.createUser(userInfo);

  // const foundUser = await User.findOne({ where: userData });
  // if (foundUser) {
  //   return { type: 'ALREADY_EXISTS', message: messages.ALREADY_EXISTS };
  // }

  const token = createToken.createToken(createdUser);
  return token;
};

export default { createUser };
