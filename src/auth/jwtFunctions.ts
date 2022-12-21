import jwt from 'jsonwebtoken';
import { IPayload } from '../interfaces/user.interface';

const secret = 'seusecretdetoken';

// const jwtConfig = {
//   algorithm: 'HS256',
//   expiresIn: '7d',
// };

const createToken = (payload: IPayload) => {
  const token = jwt.sign({ data: payload }, secret, {
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
