import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.JWT_SECRET || 'seuSegredoToken';

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '14h',
};

function tokenCreate(data: string) {
  const token = jwt.sign({ data }, secret, jwtConfig as object);
  return token;
}

export default tokenCreate;