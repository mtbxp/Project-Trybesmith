import dotenv from 'dotenv';
import jwt, { SignOptions, Secret } from 'jsonwebtoken';
import UserService from '../services/user.service';

dotenv.config();
const userService = new UserService();

const secret: Secret = 'secret';

const validateFields = (username: string, password: string) => {
  if (!username) return { type: 400, message: '"username" is required' };
  if (!password) return { type: 400, message: '"password" is required' };
  return false;
};

const jwtConfig :SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

async function authenticateLogin(user: { username: string, password: string }) {
  const { username, password } = user;
  try {
    const isFieldsValis = validateFields(username, password);
    if (isFieldsValis) return { type: isFieldsValis.type, message: isFieldsValis.message };
    const dbUser = await userService.getByUsername(username);
    if (!dbUser || dbUser.password !== password) {
      return { type: 401, message: 'Username or password invalid' }; 
    }
    const token = jwt.sign({ data: { username } }, secret, jwtConfig);
    return token;
  } catch (error: any) {
    return { type: 500, message: `Erro interno: ${error.message}` };
  }
}

export function authenticateSignIn(username: string) {
  const token = jwt.sign({ data: { username } }, secret, jwtConfig);

  return token;
}

export default authenticateLogin;