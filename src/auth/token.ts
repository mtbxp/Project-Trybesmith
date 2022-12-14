import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.JWT_SECRET || 'seuSegredoAqui';

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '10h',
};

function createToken(data: string) {
  const token = jwt.sign({ data }, secret, jwtConfig as object);
  return token;
}

export default createToken;