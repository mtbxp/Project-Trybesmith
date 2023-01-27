import usersModel from '../models/users.model';
import { User } from '../types';
import tokenGenerator from '../utils/tokenGenerator';

const create = async (user:User) => {
  await usersModel.create(user);

  const token = tokenGenerator(user);
  return { status: 201, data: { token } };
};

export default {
  create,
};
