import jwt from 'jsonwebtoken';
import User from '../interfaces/user.interface';

const newToken = (user: User): string => {
  const token = jwt.sign(
    { ...user },
    process.env.JWT_SECRET || '',
    { algorithm: 'HS256', expiresIn: '6h' },
  );
  return token;
};

export default newToken;