import jwt from 'jsonwebtoken';
import usersModel from '../models/users.model';
import User from '../interfaces/user.interface';

const newToken = ({ id, username, vocation, level }: User) => {
  const token = jwt.sign(
    { id, username, vocation, level }, 
    process.env.JWT_SECRET || '',
    { algorithm: 'HS256', expiresIn: '6h' },
  );
  return token;
};

const registerUser = async (user: User): Promise<string> => {
  const userId = await usersModel.registerUser(user);
  
  const newUser = {
    id: userId,
    username: user.username,
    vocation: user.vocation,
    level: user.level,
  };

  const userToken = newToken(newUser);

  return userToken;
};

export default {
  registerUser,
};