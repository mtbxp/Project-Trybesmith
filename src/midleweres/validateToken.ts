import type { RequestHandler } from 'express';
import { verifyToken } from '../auth/jwtFuncs';

const validateToken : RequestHandler = async (req, res, next) => {
  const token = req.header('authorization');
  console.log('token', token);
  try {
    if (!token) throw new Error('Token not found');
    await verifyToken(token);
    return next();
  } catch (e) {
    const err = e as TypeError;
    if (err.message === 'Token not found') {
      return res.status(401).json({ message: err.message });
    }
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default validateToken;