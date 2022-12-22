import userModel from '../models/userModel';
import { User } from '../helpers/types';
import jwtToken from '../helpers/jwt';

async function create(user: User) {
  await userModel.create(user);
  const token = jwtToken(user);

  return token;
}

export default {
  create,
};
