import jwt from 'jsonwebtoken';
import { IUserWithoutPassword } from '../interfaces/user.interface';

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

// const jwtConfig = {
//   algorithm: 'HS256',
//   expiresIn: '7d',
// };

const createToken = (userWithoutPassword: IUserWithoutPassword) => {
  const token = jwt.sign({ data: userWithoutPassword }, secret, {
    algorithm: 'HS256',
    expiresIn: '7d',
  });
  return token;
};

const verifyToken = (authorization: string) => {
  try {
    const payload = jwt.verify(authorization, secret);
    return payload;
  } catch (erro) {
    return { isError: true, erro };
  }
};

export { 
  createToken,
  verifyToken,
};
