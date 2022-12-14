import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.JWT_SECRET || 'seuSegredoAqui';

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '12h',
};

function createToken(data: string) {
  const token = jwt.sign({ data }, secret, jwtConfig as object);
  return token;
}

// const verifyToken = (authorization) => {
//   try {
//     const payload = jwt.verify(authorization, secret);
//     return payload;
//   } catch (error) {
//     return { isError: true, error };
//   }
// };

export default createToken;