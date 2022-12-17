import jwt from 'jsonwebtoken';
import { TUser, UserRequest } from '../interfaces/user.interface';
import userModel from '../models/user.model';

const generateToken = ({ id, username, vocation, level }: TUser): string => {
  const payload = {
    id,
    username,
    vocation,
    level,
  };
  return jwt.sign(payload, process.env.JWT_SECRET as string, { 
    algorithm: 'HS256', expiresIn: '7d', 
  });
};

const createUser = async (user: UserRequest): Promise<string> => {
  const userId = await userModel.createUser(user);
  const { password, ...userWithoutPassword } = user;

  return generateToken({ id: userId, ...userWithoutPassword });
};

export default { createUser };