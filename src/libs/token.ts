import jwt from 'jsonwebtoken';

function encode<T extends object>(payload: T): string {
  const { JWT_SECRET } = process.env;

  if (!JWT_SECRET) throw new Error('Secret must be defined');

  return jwt.sign(payload, JWT_SECRET);
}

function decode<T>(token: string): T {
  const { JWT_SECRET } = process.env;

  if (!JWT_SECRET) throw new Error('Secret must be defined');

  return jwt.verify(token, JWT_SECRET) as T;
}

export { encode, decode };
