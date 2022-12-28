import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const jwtSecret: string | undefined = process.env.JWT_SECRET;

const generateToken = (params:Record<string, unknown> = {}) => {
  if (jwtSecret) {
    jwt.sign(params, jwtSecret, { expiresIn: 360 });
  }
};

export default generateToken;