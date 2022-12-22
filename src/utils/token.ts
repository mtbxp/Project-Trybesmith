import * as jwt from 'jsonwebtoken';

require('dotenv/config');

const secret = process.env.JWT_SECRET || 'SecretToken';

const jwtConfig: object = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

function generateToken(username: string): string {
  return jwt.sign({ username }, secret, jwtConfig);
}

export default generateToken;