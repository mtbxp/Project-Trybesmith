import usersModel from '../models/users.model';
import { TUser } from '../types';
import tokenGenerator from '../utils/tokenGenerator';

const create = async (user:TUser) => {
  await usersModel.create(user);

  const token = tokenGenerator(user);
  return { status: 201, data: { token } };
};

export default {
  create,
};
