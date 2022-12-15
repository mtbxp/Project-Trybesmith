import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secret: string = process.env.JWT_SECRET || 'seusecretdetoken';
const jwtConfig: object = { expiresIn: '7d', algorithm: 'HS256' };

const createToken = (username: string) => {
  const token = jwt.sign({ data: { username } }, secret, jwtConfig);

  return token;
};

export default createToken;
