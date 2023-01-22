import jwt from 'jsonwebtoken';
import User from '../interfaces/users.interface';
import Login from '../interfaces/login.interface';

const secret = process.env.JWT_SECRET || 'senhaFantástica';

const jwtConfig = { expiresIn: '30min', algorithm: 'HS256' };

const newToken = (user: User) => {
  const token = jwt.sign({ data: user }, secret, jwtConfig as object);

  return token;
};

const loginToken = (login: Login) => {
  const token = jwt.sign({ data: login }, secret, jwtConfig as object);

  return token;
};

export default { newToken, loginToken };