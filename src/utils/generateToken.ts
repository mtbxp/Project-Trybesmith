import jwt, { Secret } from 'jsonwebtoken';

const SECRET_KEY:Secret = process.env.JWT_SECRET as string;
// const SECRET_KEY:Secret = 'SECRET';

export default (userId: number): string => {
  const payload = { userId };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '6h', algorithm: 'HS256' });

  return token;
};