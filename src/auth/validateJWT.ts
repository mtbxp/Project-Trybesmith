import jwt from 'jsonwebtoken';

import { User } from '../interfaces';

const secret = process.env.JWT_SCRET || 'naofalaprangm';

// const jwtConfig = { algorithm: 'HS256', expiresIn: '7d' };

const createToken = (user: User) => {
  const token = jwt.sign(user, secret, { algorithm: 'HS256', expiresIn: '7d' });

  return token;
};

export default createToken;