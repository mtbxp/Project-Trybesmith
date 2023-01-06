import jwt from 'jsonwebtoken';
import usersModels from '../models/users.models';
import { User } from '../types/users.types';
import { secret, config } from '../middlewares/jwtConfig';

const generateToken = (users: User) => {
  const payload = {
    username: users.username,
    vocation: users.vocation,
    level: users.level,
  };
  const token = jwt.sign({ payload }, secret, config);
  return token;
};

const verifyEmail = async (users: User) => {
  const userExist = await usersModels.getByUser(users.username);
  if (userExist) return { status: 400, error: { message: 'USER EXIST' } };
  
  const tkn = generateToken(users);

  const result = await usersModels.createUser(users);
  const gambiarra = Object.keys(result).includes('row');
  if (gambiarra) return { status: 201, token: tkn };
};

export default {
  verifyEmail,
};