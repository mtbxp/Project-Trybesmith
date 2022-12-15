import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'secret';

export default function tokenFunc(username:string) {
  const token = jwt.sign({ data: { username } }, SECRET, { algorithm: 'HS256', expiresIn: '10d' });
  return token;
}
