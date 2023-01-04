import jwt from 'jsonwebtoken';
import User from '../interfaces/user.interface';

const generateToken = (user: User) => {
  const payload = {
    id: user.id,
    username: user.username,
    vocation: user.vocation,
    level: user.level,
  };

  return jwt.sign(
    payload,
    process.env.JWT_SECRET as string,
    { algorithm: 'HS256', expiresIn: '7d' },
  );
};

export default generateToken;
