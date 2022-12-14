import jwt from 'jsonwebtoken';
import { UserCredentials } from '../interfaces/user.interface';
import { secret, config } from '../middlewares/jwtConfig';
import create from '../models/user.model';

const createUser = async (user: UserCredentials) => {
  const payload = await create(user);
  const token = jwt.sign({ payload }, secret, config);
  return token;
};

export default createUser;