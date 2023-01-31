import usersModel from '../models/users.model';
import { TLogin, TUsers } from '../types';
import createToken from '../auth/jwtFunctions';
import messages from '../utils/messages';
import statuses from '../utils/statuses';

const createUser = async (userInfo: TUsers) => {
  const createdUser = await usersModel.createUser(userInfo);

  // const foundUser = await User.findOne({ where: userData });
  // if (foundUser) {
  //   return { type: 'ALREADY_EXISTS', message: messages.ALREADY_EXISTS };
  // }

  const token = createToken.createToken(createdUser);
  return token;
};

const logIn = async (userInfo: TLogin) => {
  const foundUser = await usersModel.getByUser(userInfo);

  if (!foundUser) {
    return { status: statuses.INVALID_FIELDS, error: { message: messages.INVALID_FIELDS },
    };
  }

  const token = createToken.createToken(foundUser);
  return { status: statuses.SUCCESSFUL_STATUS, token };
};

export default { createUser, logIn };
