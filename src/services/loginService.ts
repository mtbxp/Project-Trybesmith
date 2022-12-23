import jwt from 'jsonwebtoken';
import userModel from '../models/userModel';
import { Login } from '../helpers/types';

const generateToken = (body: Login) => {
  const SECRET = process.env.JWT_SECRET || 'secretJWT';
  const payload = { id: body.id, username: body.username };
  const token = jwt.sign(payload, SECRET, {
    algorithm: 'HS256',
    expiresIn: '35d',
  });
  return token;
};

async function getUser(user: Login) {
  const result = await userModel.getUser(user);

  if (result.length < 1) {
    return undefined;
  }
  
  const token = generateToken(result);
  return token;
}

export default {
  getUser,
};