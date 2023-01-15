import jwt from 'jsonwebtoken';
import { User } from '../interfaces/user.interface';
import userModel from '../models/user.model';

const secret = 'secret';

// gerando token
const tokenGenerator = (data: User) => {
  const token = jwt.sign(data, secret, { algorithm: 'HS256', expiresIn: '60min' });
  return token;
};

// CRUD

const addUser = async (user: User):Promise<string> => {
  const data = await userModel.addUser(user);
  const token = tokenGenerator(data);
  return token;
};

export default {
  addUser,
};
