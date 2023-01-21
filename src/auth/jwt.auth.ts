import jwt from 'jsonwebtoken';
import User from '../interfaces/users.interface';

const secret = process.env.JWT_SECRET as string;

const jwtConfig = { expiresIn: '30min', algorithm: 'HS256' };

const newToken = (user: User) => {
  const token = jwt.sign({ data: user }, secret, jwtConfig as object);

  return token;
};

export default { newToken };